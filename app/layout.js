import "./globals.css";
import Navbar from "@/components/landing/Navbar";

export const metadata = {
  title: "i-REMIT — Remittance Infrastructure Platform",
  description:
    "i-REMIT provides the infrastructure to power money transfers, mobile wallets, FX trading, reconciliation, compliance automation, and global remittance services.",
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
