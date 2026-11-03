import {
  Instagram,
  Facebook,
  LinkedIn,
  HomeOutlined,
  CurrencyRupee,
  BusinessCenterOutlined,
  DirectionsCarOutlined,
  ArticleOutlined,
  TuneOutlined,
  TrendingUpOutlined,
  ShieldOutlined,
} from "@mui/icons-material";

export const COMPANY_NAME = "Finvibes Financial Services Private Limited";

export const CONTACT_INFO = {
  email: "connect@finvibes.net",
  workingHours: "Mon–Sat, 10 AM–7 PM",
  phones: [
    { display: "+91 96014 24284", raw: "9601424284" },
    { display: "+91 97259 57321", raw: "9725957321" },
  ],
  address:
    "D-302, Titanium City Centre, 100 Foot Ring Road, Near Aykar Bhawan, Satellite, Ahmedabad – 380015",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Compare Loans", href: "/compare-loans" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const SMART_TOOLS_ITEMS = [
  { label: "EMI Calculator", href: "/tools/emi-calculator" },
  { label: "Check Eligibility", href: "/tools/loan-eligibility" },
  { label: "Credit Score", href: "/credit-guide" },
  { label: "Loan Transfer", href: "/tools/loan-transfer" },
];

export const PRODUCT_ITEMS = [
  { label: "Loans", href: "/products/loans" },
  { label: "Insurance", href: "/products/insurance" },
  { label: "Credit Cards", href: "/products/credit-cards" },
  { label: "Investments", href: "/products/investments" },
  { label: "Other Services", href: "/products/other-services" },
];

export const FOOTER_PRODUCT_LINKS = [
  { label: "Home Loan", href: "/products/home-loan" },
  { label: "Personal Loan", href: "/products/personal-loan" },
  { label: "Business Loan", href: "/products/business-loan" },
  { label: "Education Loan", href: "/products/education-loan" },
  { label: "Car Loan", href: "/products/car-loan" },
  { label: "Insurance", href: "/products/insurance" },
  { label: "Investments", href: "/products/investments" },
  { label: "Credit Cards", href: "/products/credit-cards" },
];

export const TOOLS_LINKS = [
  { label: "EMI Calculator", href: "/tools/emi-calculator" },
  { label: "All Smart Tools", href: "/tools" },
  { label: "Loan Comparison", href: "/compare-loans" },
  { label: "Credit Health Guide", href: "/credit-guide" },
  { label: "Other Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    icon: <Instagram sx={{ fontSize: 20 }} />,
    href: "https://instagram.com/finvibes",
  },
  {
    name: "Facebook",
    icon: <Facebook sx={{ fontSize: 20 }} />,
    href: "https://facebook.com/finvibes",
  },
  {
    name: "LinkedIn",
    icon: <LinkedIn sx={{ fontSize: 20 }} />,
    href: "https://linkedin.com/company/finvibes",
  },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export const DISCLAIMER_TEXT =
  "Loan rates, eligibility, charges and approvals are determined by each lender and may change. Any comparison figures in demo mode are illustrative, not live lender quotes or a guarantee. Insurance and investment products are subject to provider terms and applicable registrations. Finvibes does not guarantee loan approval.";

export const HERO_CATEGORIES = [
  { label: "Loans", href: "/products/loans" },
  { label: "Insurance", href: "/products/insurance" },
  { label: "Investments", href: "/products/investments" },
  { label: "Credit Cards", href: "/products/credit-cards" },
];

export const FEATURE_CARDS = [
  {
    title: "Explore in one place",
    description:
      "Four clear product categories, with related services organised underneath.",
  },
  {
    title: "Calculate before you commit",
    description: "Estimate EMIs, affordability and potential loan savings.",
  },
  {
    title: "Compare with clarity",
    description: "Review interest, charges, eligibility and repayment terms.",
  },
  {
    title: "Get guided support",
    description: "Understand the next steps before you submit an enquiry.",
  },
];

export const SMART_DESK_TOOLS = [
  {
    id: "emi",
    title: "EMI Calculator",
    description: "Monthly EMI, total interest and total repayment in seconds.",
    href: "/tools/emi-calculator",
  },
  {
    id: "eligibility",
    title: "Loan Eligibility Check",
    description: "Get an indicative view based on income and existing EMIs.",
    href: "/tools/loan-eligibility",
  },
  {
    id: "transfer",
    title: "Loan Transfer Savings",
    description: "Estimate how a lower rate may change EMI and interest cost.",
    href: "/tools/loan-transfer",
  },
  {
    id: "compare",
    title: "Compare Loan Options",
    description: "Review lender rates, fees, tenure and key conditions.",
    href: "/compare-loans",
  },
  {
    id: "capital-gains",
    title: "Property Capital Gains",
    description: "Work through guided inputs to estimate potential tax gains.",
    href: "/tools/capital-gains",
  },
  {
    id: "bank-statement",
    title: "Bank Statement Review",
    description: "Organise recurring EMIs and fixed monthly obligations.",
    href: "/tools/bank-statement",
  },
  {
    id: "credit-health",
    title: "Credit Health Guide",
    description:
      "Learn what affects your credit profile and lender assessment.",
    href: "/credit-guide",
  },
  {
    id: "card-finder",
    title: "Credit Card Finder",
    description: "Review common income and age criteria for card options.",
    href: "/products/credit-cards",
  },
];

export const SMART_DESK_HEADER = {
  eyebrow: "FINVIBES SMART DESK",
  title: "Useful tools. Clearer decisions.",
  subtitle:
    "Start here to estimate, check and plan — before you choose a product or speak with a lender.",
  ctaLabel: "Explore All Tools",
  ctaHref: "/tools",
};

export const SMART_DESK_FOOTER = {
  title: "Not sure where to start?",
  subtitle:
    "Choose a goal and let the tools help you prepare the right questions.",
  ctaLabel: "Get Personal Guidance",
  ctaHref: "/contact",
};

export const LOAN_ELIGIBILITY_TYPES = [
  {
    id: "home",
    label: "Home Loan",
    defaultRate: 8.5,
    defaultTenure: 20,
    tenureOptions: [5, 10, 15, 20, 25, 30],
    foirPct: 60,
    icon: <HomeOutlined sx={{ fontSize: 24, color: "#e06d53" }} />,
    iconBg: "#fef3ee",
  },
  {
    id: "personal",
    label: "Personal",
    defaultRate: 11,
    defaultTenure: 5,
    tenureOptions: [1, 2, 3, 4, 5, 6, 7],
    foirPct: 60,
    icon: <CurrencyRupee sx={{ fontSize: 22, color: "#10b981" }} />,
    iconBg: "#ecfdf5",
  },
  {
    id: "business",
    label: "Business",
    defaultRate: 12.0,
    defaultTenure: 7,
    tenureOptions: [1, 2, 3, 4, 5, 6, 7],
    foirPct: 60,
    icon: <BusinessCenterOutlined sx={{ fontSize: 22, color: "#8b5cf6" }} />,
    iconBg: "#f5f3ff",
  },
  {
    id: "car",
    label: "Car Loan",
    defaultRate: 9.0,
    defaultTenure: 7,
    tenureOptions: [1, 2, 3, 4, 5, 6, 7],
    foirPct: 60,
    icon: <DirectionsCarOutlined sx={{ fontSize: 22, color: "#ef4444" }} />,
    iconBg: "#fef2f2",
  },
];

export const DEFAULT_ELIGIBILITY_VALUES = {
  income: 100000,
  existingEmi: 10000,
};

export const ELIGIBILITY_PAGE_HEADER = {
  title: "Check Your Borrowing Power",
  subtitle:
    "Lenders calculate eligibility using your Fixed Obligation to Income Ratio (FOIR). Input your figures below.",
};

export const LOAN_TRANSFER_HEADER = {
  title: "Calculate Net Switch Benefits",
  subtitle:
    "Compare your current loan terms against our partner bank transfer offers factoring in one-time switching expenses.",
};

export const DEFAULT_LOAN_TRANSFER_VALUES = {
  outstandingLoan: 5000000,
  currentRate: 8.75,
  yearsLeft: 15,
  newRate: 7.1,
  processingCharges: 0,
  otherCharges: 0,
};

export const CREDIT_PAGE_HEADER = {
  title: "Credit Score Spectrum & Factors",
  subtitle:
    "See where you stand and what moves the needle according to RBI-licensed credit bureaus.",
};

export const CREDIT_HERO_DATA = {
  badge: "FREE CREDIT ASSESSMENT",
  title: "Your Future Starts With Smart Credit",
  subtitle:
    "Check your credit score instantly and unlock financial opportunities.",
  trustPills: ["100% Secure", "Instant Results", "Better Offers"],
  score: 782,
  status: "Good / Prime Score",
  updatedTag: "Live Updated",
  factors: [
    "Payment History",
    "Credit Utilization",
    "Credit Mix",
    "Account Age",
  ],
};

export const CREDIT_INFO_CARDS = [
  {
    id: "how-cibil-works",
    title: "How CIBIL Works",
    subtitle: "Learn about payments, credit use, and loans.",
    icon: <ArticleOutlined sx={{ fontSize: 22, color: "#6366f1" }} />,
    iconBg: "#eef2ff",
  },
  {
    id: "factors-that-matter",
    title: "Factors That Matter",
    subtitle: "Payments, credit use, and loans impact your score.",
    icon: <TuneOutlined sx={{ fontSize: 22, color: "#0ea5e9" }} />,
    iconBg: "#f0f9ff",
  },
  {
    id: "improve-your-score",
    title: "Improve Your Score",
    subtitle: "Pay on time and keep balances low consistently.",
    icon: <TrendingUpOutlined sx={{ fontSize: 22, color: "#10b981" }} />,
    iconBg: "#ecfdf5",
  },
  {
    id: "privacy-first",
    title: "Your Privacy Comes First",
    subtitle:
      "Our information is securely encrypted and protected at every step.",
    icon: <ShieldOutlined sx={{ fontSize: 22, color: "#f59e0b" }} />,
    iconBg: "#fffbeb",
  },
];

export const CREDIT_FORM_CONTENT = {
  partnerBadge: "OFFICIAL BUREAU PARTNER",
  title: "Check Your Free Credit Score",
  subtitle: "Instantly Access Detailed Credit Report",
  caption: "View your credit report instantly — with no impact on your score.",
  trustHighlights: ["No Impact on Credit Score", "Free Monthly Updates"],
  securityNotice:
    "Your Personal Information is 100% secured with us. We do not share your data with any third party.",
  consentText:
    "By proceeding, I agree to provide personal details and authorize Finvibes to obtain my Credit Score/Profile from Cibil / Equifax / Experian / CRIF Highmark (bureau). I also agree to following Credit Score Terms of Use.",
  buttonLabel: "Get Free Credit Report",
  submitBtn: "Get Free Credit Report",
};

export const colors = {
  // Brand Blues
  brand: {
    primary: "#0b63e5",
    primaryHover: "#0851c2",
    primaryLight: "#1565c0",
    cyan: "#22c1e8",
    gradient: "linear-gradient(to right, #1565c0, #1e88e5, #42a5f5)",
    heroGradient:
      "linear-gradient(115deg, #102d68 0%, #0b4fd9 55%, #48bce0 120%)",
    smartDeskGradient:
      "linear-gradient(135deg, #0940a8 0%, #0c4fd8 55%, #186fee 100%)",
    buttonBlue: "#0d5ecc",
    buttonBlueHover: "#0950b5",
  },

  // Dark Navy Backgrounds
  navy: {
    dark: "#07162e", // Footer background
    deep: "#0d1b3e", // Top Info Bar background
  },

  // Text Hierarchy
  text: {
    primary: "#18253B", // Headings, nav links, strong text
    secondary: "#64748b", // Subtitles, muted labels
    white: "#ffffff",
    whiteMuted: "rgba(255, 255, 255, 0.78)",
    whiteBody: "rgba(255, 255, 255, 0.88)",
    whiteSubtle: "rgba(255, 255, 255, 0.52)",
  },

  // Surfaces & Borders
  border: {
    light: "rgba(24, 37, 59, 0.08)",
    dark: "rgba(255, 255, 255, 0.08)",
    whiteFaint: "rgba(255, 255, 255, 0.25)",
    whiteGhost: "rgba(255, 255, 255, 0.6)",
    ringOuter: "rgba(255, 255, 255, 0.14)",
    ringInner: "rgba(255, 255, 255, 0.18)",
    toolCard: "rgba(255, 255, 255, 0.16)",
    toolCardHover: "rgba(255, 255, 255, 0.35)",
  },
  surface: {
    white: "#ffffff",
    hoverLight: "rgba(24, 37, 59, 0.06)",
    ghostButton: "rgba(255, 255, 255, 0.05)",
    ghostButtonHover: "rgba(255, 255, 255, 0.16)",
    featureCard: "#f6f9fe",
    toolCard: "rgba(255, 255, 255, 0.08)",
    toolCardHover: "rgba(255, 255, 255, 0.15)",
    calculatorCard: "#f3f7fd",
  },
};

export const typography = {
  fontFamily: "Inter, Arial, sans-serif",

  // Typographic Scale
  fontSizes: {
    xs: "11px", // Eyebrow, micro badges
    sm: "12px", // Badges, dropdown sub-items, info bar
    md: "13px", // Category pills, card brand, subtitle
    base: "14px", // Main nav links, buttons, body text
    body: "15.5px", // Hero description
    lg: "16px", // Section headers, bold labels
    xl: "20px", // Card titles
    "2xl": "23px", // Card motto
    "3xl": "34px", // Hero mobile
    "4xl": "44px", // Hero tablet
    "5xl": "52px", // Hero desktop h1
  },

  // Font Weights
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extraBold: 800,
  },
};
