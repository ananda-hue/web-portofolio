import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio Ananda Ferandita",
  description: "Portofolio Frontend Developer & IT Graduate - Ananda Ferandita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-900 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}