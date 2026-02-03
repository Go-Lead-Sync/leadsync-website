import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LeadSync | The #1 AI Lead Manager for Agencies, Coaches and Consultants",
  description: "Qualify instantly, fill your calendar, close more clients & never chase leads again. Powered by Claude AI.",
  keywords: "AI lead management, appointment setting, GoHighLevel, CRM automation, lead qualification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
