import "./globals.css";
import Navbar from "@/components/landing/Navbar";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://iremit.io";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "i-REMIT — Remittance Infrastructure Platform",
    template: "%s | i-REMIT",
  },
  description:
    "i-REMIT provides the infrastructure to power money transfers, mobile wallets, FX trading, reconciliation, compliance automation, and global remittance services.",
  keywords: [
    "remittance platform",
    "money transfer infrastructure",
    "fintech API",
    "mobile wallet",
    "FX trading",
    "compliance automation",
    "cross-border payments",
    "global remittance",
    "payment gateway",
    "financial technology",
  ],
  authors: [{ name: "i-REMIT" }],
  creator: "i-REMIT",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "i-REMIT",
    title: "i-REMIT — Remittance Infrastructure Platform",
    description:
      "Power money transfers, mobile wallets, FX trading, reconciliation, compliance automation, and global remittance services with i-REMIT.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "i-REMIT Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "i-REMIT — Remittance Infrastructure Platform",
    description:
      "Power money transfers, mobile wallets, FX trading, and global remittance with i-REMIT's infrastructure.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
