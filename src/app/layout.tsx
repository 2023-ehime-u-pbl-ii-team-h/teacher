import "./globals.css";
import "../theme/theme.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "出席確認システム - 教員用",
  description: "講義の出席状況を確認、修正、提出しましょう。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`background on-background-text ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
