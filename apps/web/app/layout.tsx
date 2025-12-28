import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PPA Pricing",
  description: "Web interface for the PPA pricing toolkit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
