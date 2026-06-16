import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js on Vercel",
  description: "Vercel에 바로 배포 가능한 Next.js 기본 템플릿",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
