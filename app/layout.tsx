import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "林风声 - AI落地应用专家 | 智能体开发工程师",
  description: "林风声，00后大厂项目经理，专注于智能体与AI编程的落地应用与提效。擅长使用Claude Code开发，Coze、N8N等智能体平台搭建工作流，实现日常工作200%提效。",
  keywords: ["AI落地应用", "智能体开发", "Claude Code", "Coze", "N8N", "工作流自动化", "林风声", "项目经理", "效率提升"],
  authors: [{ name: "林风声" }],
  openGraph: {
    title: "林风声 - AI落地应用专家",
    description: "专注于智能体与AI编程的落地应用与提效",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "林风声 - AI落地应用专家",
    description: "专注于智能体与AI编程的落地应用与提效",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
