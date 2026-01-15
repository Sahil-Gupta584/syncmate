import { Analytics } from "@vercel/analytics/next";
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
      <head>
        <script
          defer
          data-website-id="68d124eb001034bd8493"
          data-domain="syncmate.xyz"
          src="http://localhost:3000/script.js"
        ></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6220719265390915"
     crossOrigin="anonymous"></script>
        
        
      </head>
      <body className={` ${geistMono.variable}`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
