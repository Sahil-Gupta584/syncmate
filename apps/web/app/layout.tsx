        import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syncmate - Stop the Download-Upload Nightmare",
  description:
    "The first collaboration platform built specifically for content creators. Upload once, collaborate seamlessly, publish directly to YouTube.No more file chaos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${geistMono.variable}`}>
        <Providers>{children}</Providers>
        <Analytics/>
      </body>
    </html>
  );
}
