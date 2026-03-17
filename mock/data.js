/**
 * mock/data.js
 * Central store for all static mock data used across the i-REMIT website.
 * Import named exports into pages and components instead of defining data inline.
 */

import {
  Globe,
  Wallet,
  Users,
  Eye,
  Shield,
  FileCheck,
  RefreshCw,
  Link2,
  Rocket,
  Building,
  Zap,
  Landmark,
  CreditCard,
  Smartphone,
  ArrowLeftRight,
  BarChart3,
  MapPin,
  ShieldCheck,
  Send,
  Download,
  ListChecks,
  Receipt,
  Heart,
  CheckCircle,
} from "lucide-react";

// ── Navbar ────────────────────────────────────────────────────────────────────

export const navLinks = [
  "Home",
  "Platform",
  "Features",
  "Solutions",
  "Pricing",
  "Contact",
];

// ── Social Proof (marquee) ────────────────────────────────────────────────────

export const brands = [
  "TransferHub", "PayRoute", "GlobalFX", "WalletPay", "RemitFlow",
  "FinBridge", "SwiftSend", "MoneyLink", "CashNow", "PayForward",
  "TransferHub", "PayRoute", "GlobalFX", "WalletPay", "RemitFlow",
  "FinBridge", "SwiftSend", "MoneyLink", "CashNow", "PayForward",
];

// ── Hero Section — dashboard mockup ──────────────────────────────────────────

export const dashboardStats = [
  { label: "Transactions", value: "$2.4M", color: "bg-[#81ad10]/10" },
  { label: "Active Wallets", value: "12,847", color: "bg-[#080145]/10" },
  { label: "Active Agents", value: "1,203", color: "bg-[#81ad10]/10" },
];

export const chartBarHeights = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88];

export const recentTransactions = [
  { ref: "TX-9821", corridor: "US → PH", amount: "$1,250", status: "Completed" },
  { ref: "TX-9820", corridor: "UK → NG", amount: "£800", status: "Processing" },
  { ref: "TX-9819", corridor: "AE → PK", amount: "د.إ2,000", status: "Completed" },
];

// ── Platform Overview ─────────────────────────────────────────────────────────

export const platformModules = [
  {
    icon: ArrowLeftRight,
    title: "Remittance Engine",
    desc: "Core system powering cross-border money transfers with real-time processing and multi-corridor support.",
  },
  {
    icon: Smartphone,
    title: "Mobile Wallet Platform",
    desc: "Launch a branded mobile wallet app for customers with send, receive, and store capabilities.",
  },
  {
    icon: BarChart3,
    title: "Reconciliation Engine",
    desc: "Automatically reconcile transactions across banks, agents, and payment partners.",
  },
  {
    icon: MapPin,
    title: "Cash Shift & Agent Points",
    desc: "Manage agent networks, payout locations, and daily cash operations effortlessly.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Risk Management",
    desc: "Built-in KYC, AML monitoring, and regulatory reporting to keep you compliant.",
  },
];

// ── Feature Grid ──────────────────────────────────────────────────────────────

export const features = [
  {
    icon: Globe,
    title: "Global Remittance Processing",
    desc: "Process cross-border transfers across 100+ countries with real-time settlement.",
  },
  {
    icon: Wallet,
    title: "Multi-Currency Wallet System",
    desc: "Support dozens of currencies in a single wallet with instant conversion.",
  },
  {
    icon: Users,
    title: "Agent Management",
    desc: "Onboard, manage, and monitor agent networks at scale.",
  },
  {
    icon: Eye,
    title: "Transaction Monitoring",
    desc: "Real-time tracking and alerts for every transaction in the pipeline.",
  },
  {
    icon: Shield,
    title: "Fraud Prevention",
    desc: "AI-powered fraud detection and prevention across all channels.",
  },
  {
    icon: FileCheck,
    title: "Compliance Automation",
    desc: "Automated KYC/AML checks, sanctions screening, and reporting.",
  },
  {
    icon: RefreshCw,
    title: "Settlement & Reconciliation",
    desc: "Automated reconciliation with banks, partners, and payment networks.",
  },
];

// ── Mobile Wallet ─────────────────────────────────────────────────────────────

export const walletFeatures = [
  { icon: Send, label: "Send Money" },
  { icon: Download, label: "Receive Funds" },
  { icon: Landmark, label: "Store Balances" },
  { icon: ListChecks, label: "Track Transactions" },
  { icon: Globe, label: "Multi-Currency" },
  { icon: Receipt, label: "Bill Payments" },
];

export const walletQuickActions = ["Send", "Receive", "Top Up"];

export const walletTransactions = [
  { name: "Maria Santos", amount: "-$250.00", time: "2 min ago" },
  { name: "FX Trade", amount: "+$1,200.00", time: "1 hr ago" },
  { name: "Bill Payment", amount: "-$45.00", time: "3 hr ago" },
];

// ── How It Works ──────────────────────────────────────────────────────────────

export const howItWorksSteps = [
  {
    icon: Link2,
    step: "01",
    title: "Connect",
    desc: "Connect your payment partners, banks, and agent networks to the I-Remit platform.",
  },
  {
    icon: Rocket,
    step: "02",
    title: "Launch",
    desc: "Launch your remittance and wallet services with white-label mobile and web applications.",
  },
  {
    icon: Globe,
    step: "03",
    title: "Scale",
    desc: "Scale globally with compliance automation, agent networks, and multi-corridor support.",
  },
];

// ── Solutions ─────────────────────────────────────────────────────────────────

export const solutions = [
  {
    icon: Building,
    title: "Money Transfer Operators",
    desc: "Digitize your operations with a modern remittance engine, agent management, and automated compliance.",
  },
  {
    icon: Zap,
    title: "Fintech Startups",
    desc: "Launch your remittance or wallet product in weeks, not months. Focus on growth while we handle the infrastructure.",
  },
  {
    icon: Landmark,
    title: "Banks",
    desc: "Modernize your remittance corridor with real-time FX, multi-channel payouts, and seamless reconciliation.",
  },
  {
    icon: CreditCard,
    title: "Payment Providers",
    desc: "Add remittance capabilities to your existing payment platform with our plug-and-play APIs.",
  },
  {
    icon: Smartphone,
    title: "Digital Wallet Platforms",
    desc: "Extend your wallet with cross-border transfers, currency exchange, and financial marketplace features.",
  },
];

// ── Testimonials ──────────────────────────────────────────────────────────────

export const testimonials = [
  {
    quote:
      "I-Remit allowed us to launch our remittance corridor from the US to the Philippines in just 3 weeks. The platform is incredibly robust.",
    name: "Carlos Rivera",
    role: "CEO, RemitLink",
    initial: "C",
  },
  {
    quote:
      "The FX trading engine and reconciliation tools saved us hundreds of hours per month. It's the backbone of our entire operation.",
    name: "Amara Okafor",
    role: "CTO, PayBridge Africa",
    initial: "A",
  },
  {
    quote:
      "We evaluated 12 platforms before choosing I-Remit. The compliance automation and white-label wallet were the deciding factors.",
    name: "Raj Patel",
    role: "Founder, SwiftRemit",
    initial: "R",
  },
];

// ── Pricing ───────────────────────────────────────────────────────────────────

export const pricingPlans = [
  {
    name: "Starter",
    price: "$499",
    period: "/mo",
    desc: "Best for small remittance startups.",
    features: [
      "Remittance engine",
      "Basic mobile wallet",
      "Up to 5 corridors",
      "Basic reconciliation",
      "Email support",
      "Standard compliance tools",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$1,499",
    period: "/mo",
    desc: "Best for scaling fintech companies.",
    features: [
      "Everything in Starter",
      "Unlimited corridors",
      "Advanced reconciliation",
      "Agent management",
      "Priority support",
      "Compliance automation",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For banks and large financial institutions.",
    features: [
      "Everything in Growth",
      "White-label platform",
      "Dedicated support",
      "On-premise deployment",
      "SLA guarantee",
    ],
    highlight: false,
  },
];

// ── Footer ────────────────────────────────────────────────────────────────────

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Platform", href: "#platform" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

// ── Careers ───────────────────────────────────────────────────────────────────

export const openRoles = [
  {
    title: "Senior Backend Engineer",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
    desc: "Build and scale our core remittance transaction engine using modern backend technologies.",
  },
  {
    title: "Product Manager – Wallet Platform",
    team: "Product",
    location: "Remote",
    type: "Full-time",
    desc: "Own the mobile wallet product roadmap and work closely with engineering and design.",
  },
  {
    title: "Compliance & AML Analyst",
    team: "Compliance",
    location: "Remote / Hybrid",
    type: "Full-time",
    desc: "Manage KYC/AML workflows, regulatory reporting, and onboarding compliance processes.",
  },
  {
    title: "Sales Development Representative",
    team: "Sales",
    location: "Remote",
    type: "Full-time",
    desc: "Identify and qualify new business opportunities with fintech companies, banks, and MTOs.",
  },
  {
    title: "Frontend Engineer (React)",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
    desc: "Craft high-quality UI for our SaaS dashboard, mobile wallet, and agent management tools.",
  },
  {
    title: "Customer Success Manager",
    team: "Customer Success",
    location: "Remote",
    type: "Full-time",
    desc: "Onboard new clients onto the i-REMIT platform and ensure their long-term success.",
  },
];

export const companyValues = [
  {
    icon: Zap,
    title: "Move Fast",
    desc: "We ship fast, learn quickly, and iterate. Speed is our advantage.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    desc: "We build for the world. Our team and customers span every continent.",
  },
  {
    icon: Users,
    title: "Team First",
    desc: "We win together. Collaboration, trust, and respect are non-negotiable.",
  },
  {
    icon: Heart,
    title: "Customer Obsession",
    desc: "Everything we build starts with the customer's success in mind.",
  },
];

export const teamColors = {
  Engineering: "bg-[#81ad10]/20 text-black",
  Product: "bg-[#080145]/10 text-[#080145]",
  Compliance: "bg-yellow-100 text-yellow-800",
  Sales: "bg-blue-100 text-blue-800",
  "Customer Success": "bg-purple-100 text-purple-800",
};

// ── Request Demo ──────────────────────────────────────────────────────────────

export const demoModules = [
  "Remittance Engine",
  "Mobile Wallet Platform",
  "Reconciliation Engine",
  "Cash Shift & Agent Points",
  "Compliance & Risk Management",
];

export const demoFeatures = [
  { icon: CheckCircle, text: "Live product walkthrough tailored to your use case" },
  { icon: CheckCircle, text: "Custom pricing based on your business size" },
  { icon: CheckCircle, text: "Technical Q&A with our engineering team" },
  { icon: CheckCircle, text: "Integration and deployment timeline estimate" },
];

// ── Contact ───────────────────────────────────────────────────────────────────

export const contactReasons = [
  "Request a Demo",
  "Sales Enquiry",
  "Technical Support",
  "Partnership Opportunity",
  "Press & Media",
  "Other",
];

// ── Privacy Policy ────────────────────────────────────────────────────────────

export const privacySections = [
  {
    title: "1. Introduction",
    content: `i-REMIT ("we", "our", "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and share information when you access our website, platform, or services. By using i-REMIT, you agree to the terms described in this policy.`,
  },
  {
    title: "2. Information We Collect",
    content: `We collect the following types of information:\n\n• Identity Data: Full name, email address, phone number, job title, and company name.\n• Technical Data: IP address, browser type, device information, and usage logs.\n• Business Data: Company details, transaction volume estimates, and selected platform modules provided during onboarding or demo requests.\n• Communications: Messages, emails, or enquiries you send to us.\n\nWe do not collect sensitive financial data such as bank account numbers or payment card details through this website.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use your data to:\n\n• Respond to demo requests and sales enquiries.\n• Provide, maintain, and improve our platform and services.\n• Send product updates, newsletters, and relevant communications (with your consent).\n• Comply with legal and regulatory obligations.\n• Detect and prevent fraud or abuse.\n\nWe do not sell your personal data to third parties.`,
  },
  {
    title: "4. Legal Basis for Processing",
    content: `We process personal data under the following legal bases:\n\n• Contractual necessity – to fulfil our obligations when you use our services.\n• Legitimate interests – to operate our business and improve our platform.\n• Legal compliance – to meet applicable laws and regulatory requirements.\n• Consent – where you have explicitly provided it, such as for marketing communications.`,
  },
  {
    title: "5. Data Sharing",
    content: `We may share your data with:\n\n• Service providers who help us operate our platform (e.g., cloud hosting, CRM, analytics).\n• Legal and regulatory authorities where required by law.\n• Business partners, only where you have given explicit consent.\n\nAll third-party providers are contractually bound to handle your data securely and lawfully.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain personal data only as long as necessary to fulfil the purposes described in this policy, or as required by law. When data is no longer needed, it is securely deleted or anonymised.`,
  },
  {
    title: "7. Your Rights",
    content: `Depending on your jurisdiction, you may have the right to:\n\n• Access the personal data we hold about you.\n• Correct inaccurate or incomplete data.\n• Request deletion of your data ("right to be forgotten").\n• Restrict or object to processing of your data.\n• Data portability — receive your data in a structured format.\n• Withdraw consent at any time.\n\nTo exercise any of these rights, contact us at privacy@i-remit.io.`,
  },
  {
    title: "8. Cookies",
    content: `We use cookies and similar tracking technologies to analyse website traffic and improve user experience. You can control cookie preferences through your browser settings. Disabling cookies may affect some features of our website.`,
  },
  {
    title: "9. Security",
    content: `We implement industry-standard security measures to protect your data, including encryption in transit and at rest, access controls, and regular security audits. However, no system is completely immune to risk, and we cannot guarantee absolute security.`,
  },
  {
    title: "10. International Transfers",
    content: `i-REMIT operates globally. Your data may be transferred to and processed in countries outside your own. Where such transfers occur, we apply appropriate safeguards in accordance with applicable data protection laws.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a prominent notice on our website. Continued use of our services after updates constitutes acceptance of the revised policy.`,
  },
  {
    title: "12. Contact Us",
    content: `For privacy-related questions or requests, contact us at:\n\nEmail: privacy@i-remit.io\nAddress: i-REMIT Headquarters`,
  },
];

// ── Terms of Service ──────────────────────────────────────────────────────────

export const termsSections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using i-REMIT's platform, website, or services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use our services. These terms apply to all users, including clients, partners, and any authorised representatives.`,
  },
  {
    title: "2. Description of Services",
    content: `i-REMIT provides a software-as-a-service (SaaS) remittance infrastructure platform, including but not limited to:\n\n• Remittance transaction engine\n• Mobile wallet platform\n• Reconciliation engine\n• Agent and cash shift management\n• Compliance and KYC/AML tools\n\nAccess to specific modules is subject to your chosen subscription plan and agreed commercial terms.`,
  },
  {
    title: "3. Eligibility",
    content: `To use i-REMIT, you must:\n\n• Be a legally registered business entity or authorised individual representative.\n• Hold any licences or regulatory approvals required to operate money transfer or financial services in your jurisdiction.\n• Be at least 18 years of age.\n\ni-REMIT reserves the right to refuse service to any entity that does not meet these requirements.`,
  },
  {
    title: "4. Account Registration",
    content: `To access our platform, you must create an account and provide accurate, complete information. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. Notify us immediately at support@i-remit.io if you suspect any unauthorised access.`,
  },
  {
    title: "5. Subscription and Payment",
    content: `Access to i-REMIT is provided on a subscription basis. Fees are billed in accordance with your selected plan. All fees are:\n\n• Due in advance unless otherwise agreed in writing.\n• Non-refundable except where required by law.\n• Subject to change with 30 days' prior written notice.\n\nFailure to pay may result in suspension or termination of your account.`,
  },
  {
    title: "6. Acceptable Use",
    content: `You agree not to use i-REMIT's platform to:\n\n• Facilitate illegal transactions, money laundering, or terrorist financing.\n• Transmit malicious code, viruses, or harmful data.\n• Reverse engineer, decompile, or attempt to extract source code.\n• Resell or sublicense the platform without written consent.\n• Violate any applicable law or regulation.\n\nAny breach of this section may result in immediate account termination and legal action.`,
  },
  {
    title: "7. Compliance Obligations",
    content: `You are solely responsible for ensuring your use of the platform complies with all applicable financial regulations, including anti-money laundering (AML), know-your-customer (KYC), and sanctions laws in your jurisdiction. i-REMIT provides compliance tools as part of the platform but does not provide legal or regulatory advice.`,
  },
  {
    title: "8. Intellectual Property",
    content: `All intellectual property rights in the i-REMIT platform, including software, design, trademarks, and documentation, are owned by or licensed to i-REMIT. You are granted a limited, non-exclusive, non-transferable licence to use the platform for your internal business purposes only. No rights are transferred to you under these terms.`,
  },
  {
    title: "9. Confidentiality",
    content: `Both parties agree to keep confidential any non-public information received from the other party and to use such information only for the purposes set out in these terms. This obligation survives termination of the agreement.`,
  },
  {
    title: "10. Data Processing",
    content: `Your use of i-REMIT involves the processing of personal data. Our handling of personal data is governed by our Privacy Policy, which forms part of these terms. By using our platform, you agree to our data processing practices as described therein.`,
  },
  {
    title: "11. Limitation of Liability",
    content: `To the fullest extent permitted by law, i-REMIT shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your use of the platform. Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.`,
  },
  {
    title: "12. Service Availability",
    content: `We aim to provide a reliable, high-availability platform. However, we do not guarantee uninterrupted service. Scheduled and emergency maintenance may result in downtime. We will endeavour to provide advance notice of scheduled maintenance where possible.`,
  },
  {
    title: "13. Termination",
    content: `Either party may terminate the agreement with 30 days' written notice. We reserve the right to suspend or terminate your account immediately for material breach of these terms, non-payment, or regulatory risk.\n\nUpon termination, your access to the platform will cease and we will handle your data in accordance with our Privacy Policy and applicable law.`,
  },
  {
    title: "14. Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with applicable law. Any disputes shall be subject to the exclusive jurisdiction of the relevant courts.`,
  },
  {
    title: "15. Changes to These Terms",
    content: `We may update these Terms of Service from time to time. We will notify you of material changes via email or a notice on our platform. Continued use of i-REMIT after changes take effect constitutes your acceptance of the updated terms.`,
  },
  {
    title: "16. Contact",
    content: `For questions about these Terms of Service, contact us at:\n\nEmail: legal@i-remit.io\nAddress: i-REMIT Headquarters`,
  },
];
