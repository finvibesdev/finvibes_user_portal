"use client";

import { useState, useMemo } from "react";
import { Container, Grid } from "@mui/material";
import { LOAN_ELIGIBILITY_TYPES, DEFAULT_ELIGIBILITY_VALUES } from "@/constants";
import LoanTypeTabs from "./LoanTypeTabs";
import FinancialDetailsCard from "./FinancialDetailsCard";
import EligibilityResultCard from "./EligibilityResultCard";

export default function LoanEligibilityCalculator() {
  const [activeTabId, setActiveTabId] = useState("home");
  const [income, setIncome] = useState(DEFAULT_ELIGIBILITY_VALUES.income);
  const [existingEmi, setExistingEmi] = useState(DEFAULT_ELIGIBILITY_VALUES.existingEmi);

  // Active loan config
  const activeConfig = useMemo(() => {
    const matched = LOAN_ELIGIBILITY_TYPES.find((t) => t.id === activeTabId);
    return matched ? matched : LOAN_ELIGIBILITY_TYPES[0];
  }, [activeTabId]);

  const [rate, setRate] = useState(activeConfig.defaultRate);
  const [tenure, setTenure] = useState(activeConfig.defaultTenure);

  // Handle Tab Switch: updates default rate & tenure while preserving income & existing EMI
  const handleSelectTab = (tabId) => {
    setActiveTabId(tabId);
    const matched = LOAN_ELIGIBILITY_TYPES.find((t) => t.id === tabId);
    const newConfig = matched ? matched : LOAN_ELIGIBILITY_TYPES[0];
    setRate(newConfig.defaultRate);
    setTenure(newConfig.defaultTenure);
  };

  // Eligibility and FOIR Calculation
  const calculation = useMemo(() => {
    const numIncome = Number(income);
    const validIncome = isNaN(numIncome) ? 0 : numIncome;
    const I = Math.max(0, validIncome);

    const numEmi = Number(existingEmi);
    const validEmi = isNaN(numEmi) ? 0 : numEmi;
    const E = Math.max(0, validEmi);

    const foirPct = activeConfig.foirPct ? activeConfig.foirPct : 60;
    const foirRatio = foirPct / 100;

    // Income Limit: Total permissible monthly EMI capacity based on FOIR
    const incomeLimit = Math.round(I * foirRatio);

    // Max New EMI: Remaining EMI capacity after accounting for existing EMI
    const maxNewEmi = Math.max(0, incomeLimit - E);

    // Reverse EMI calculation to find eligible principal loan amount
    const numRate = Number(rate);
    const validRate = isNaN(numRate) ? 0 : numRate;
    const R = Math.max(0, validRate) / 12 / 100;

    const numTenure = Number(tenure);
    const validTenure = isNaN(numTenure) ? 0 : numTenure;
    const N = Math.max(1, validTenure * 12);

    let eligibility = 0;
    if (maxNewEmi > 0 && R > 0 && N > 0) {
      const pow = Math.pow(1 + R, N);
      eligibility = (maxNewEmi * (pow - 1)) / (R * pow);
    } else if (maxNewEmi > 0 && N > 0) {
      eligibility = maxNewEmi * N;
    }

    // FOIR Utilisation percentage
    let foirUtilisationPct = 0;
    if (I > 0) {
      const totalObligation = Math.min(incomeLimit, E + maxNewEmi);
      foirUtilisationPct = Math.round((totalObligation / I) * 100);
    }

    return {
      incomeLimit,
      maxNewEmi,
      eligibility: Math.round(eligibility),
      foirUtilisationPct,
    };
  }, [income, existingEmi, rate, tenure, activeConfig]);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
      {/* 4 Loan Categories Tab Bar */}
      <LoanTypeTabs
        activeTabId={activeTabId}
        onSelectTab={handleSelectTab}
      />

      {/* Calculator Body: Form on Left, Results on Right */}
      <Grid container spacing={{ xs: 3, md: 4 }}>
        {/* Left Column: Financial Details Form */}
        <Grid size={{ xs: 12, md: 7.2 }}>
          <FinancialDetailsCard
            income={income}
            onIncomeChange={setIncome}
            existingEmi={existingEmi}
            onExistingEmiChange={setExistingEmi}
            rate={rate}
            onRateChange={setRate}
            tenure={tenure}
            onTenureChange={setTenure}
            tenureOptions={activeConfig.tenureOptions}
            foirPct={activeConfig.foirPct}
            onCalculate={() => {}}
          />
        </Grid>

        {/* Right Column: Dynamic Eligibility Results */}
        <Grid size={{ xs: 12, md: 4.8 }}>
          <EligibilityResultCard
            loanTypeLabel={activeConfig.label}
            eligibilityAmount={calculation.eligibility}
            maxNewEmi={calculation.maxNewEmi}
            incomeLimit={calculation.incomeLimit}
            existingEmi={existingEmi}
            foirUtilisationPct={calculation.foirUtilisationPct}
            foirPct={activeConfig.foirPct}
            rate={rate}
            tenure={tenure}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
