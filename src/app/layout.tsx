import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOTVS IA",
  description: "CHAT WITH THE BEST AI ON THE MARKET",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
