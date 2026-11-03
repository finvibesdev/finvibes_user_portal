"use client";

import { useState, useMemo } from "react";
import { Container, Grid } from "@mui/material";
import { DEFAULT_LOAN_TRANSFER_VALUES } from "@/constants";
import LoanTransferInputCard from "./LoanTransferInputCard";
import LoanTransferResultCard from "./LoanTransferResultCard";

export default function LoanTransferCalculator() {
  const [outstandingLoan, setOutstandingLoan] = useState(
    DEFAULT_LOAN_TRANSFER_VALUES.outstandingLoan
  );
  const [currentRate, setCurrentRate] = useState(
    DEFAULT_LOAN_TRANSFER_VALUES.currentRate
  );
  const [yearsLeft, setYearsLeft] = useState(
    DEFAULT_LOAN_TRANSFER_VALUES.yearsLeft
  );
  const [newRate, setNewRate] = useState(
    DEFAULT_LOAN_TRANSFER_VALUES.newRate
  );
  const [processingCharges, setProcessingCharges] = useState(
    DEFAULT_LOAN_TRANSFER_VALUES.processingCharges
  );
  const [otherCharges, setOtherCharges] = useState(
    DEFAULT_LOAN_TRANSFER_VALUES.otherCharges
  );

  const calculations = useMemo(() => {
    const rawP = Number(outstandingLoan);
    const P = Math.max(0, isNaN(rawP) ? 0 : rawP);

    const rawR1 = Number(currentRate);
    const r1 = Math.max(0, isNaN(rawR1) ? 0 : rawR1);

    const rawR2 = Number(newRate);
    const r2 = Math.max(0, isNaN(rawR2) ? 0 : rawR2);

    const rawY = Number(yearsLeft);
    const y = Math.max(0, isNaN(rawY) ? 0 : rawY);
    const N = Math.max(1, y * 12);

    const rawF1 = Number(processingCharges);
    const f1 = Math.max(0, isNaN(rawF1) ? 0 : rawF1);

    const rawF2 = Number(otherCharges);
    const f2 = Math.max(0, isNaN(rawF2) ? 0 : rawF2);
    const totalFees = f1 + f2;

    const rateDifference = Math.max(0, r1 - r2);

    // Monthly interest rates
    const m1 = r1 / 12 / 100;
    const m2 = r2 / 12 / 100;

    // Current EMI
    let currentEmi = 0;
    if (P > 0 && m1 > 0 && N > 0) {
      const pow1 = Math.pow(1 + m1, N);
      currentEmi = (P * m1 * pow1) / (pow1 - 1);
    } else if (P > 0 && N > 0) {
      currentEmi = P / N;
    }

    // New EMI
    let newEmi = 0;
    if (P > 0 && m2 > 0 && N > 0) {
      const pow2 = Math.pow(1 + m2, N);
      newEmi = (P * m2 * pow2) / (pow2 - 1);
    } else if (P > 0 && N > 0) {
      newEmi = P / N;
    }

    const roundedCurrentEmi = Math.round(currentEmi);
    const roundedNewEmi = Math.round(newEmi);
    const monthlyDrop = Math.max(0, roundedCurrentEmi - roundedNewEmi);

    // Total gross savings over loan tenure
    const grossSavings = Math.max(0, monthlyDrop * N);
    const netSavings = Math.max(0, grossSavings - totalFees);

    return {
      currentEmi: roundedCurrentEmi,
      newEmi: roundedNewEmi,
      monthlyDrop,
      grossSavings,
      totalFees,
      netSavings,
      rateDifference,
    };
  }, [
    outstandingLoan,
    currentRate,
    newRate,
    yearsLeft,
    processingCharges,
    otherCharges,
  ]);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 3 } }}>
      <Grid container spacing={{ xs: 3, md: 4 }}>
        {/* Left Column: Input Form (Step 1 & Step 2) */}
        <Grid size={{ xs: 12, md: 7.2 }}>
          <LoanTransferInputCard
            outstandingLoan={outstandingLoan}
            onOutstandingLoanChange={setOutstandingLoan}
            currentRate={currentRate}
            onCurrentRateChange={setCurrentRate}
            yearsLeft={yearsLeft}
            onYearsLeftChange={setYearsLeft}
            newRate={newRate}
            onNewRateChange={setNewRate}
            processingCharges={processingCharges}
            onProcessingChargesChange={setProcessingCharges}
            otherCharges={otherCharges}
            onOtherChargesChange={setOtherCharges}
            rateDifference={calculations.rateDifference}
          />
        </Grid>

        {/* Right Column: Dynamic Net Switch Benefits Results */}
        <Grid size={{ xs: 12, md: 4.8 }}>
          <LoanTransferResultCard
            netSavings={calculations.netSavings}
            monthlyDrop={calculations.monthlyDrop}
            currentEmi={calculations.currentEmi}
            newEmi={calculations.newEmi}
            grossSavings={calculations.grossSavings}
            totalFees={calculations.totalFees}
            onCalculate={() => {}}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

