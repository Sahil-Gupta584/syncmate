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
          data-website-id="68d2611f0011c3785cb2"
          data-domain="insightly-three.vercel.app"
          data-allow-localhost={true}
          src=" https://insightly-three.vercel.app/script.js"
          // src=" http://localhost:3000/script.js"
        />
        <script
          defer
          data-website-id="68dbe0193a2d26a29bf1926d"
          data-domain="syncmate.xyz"
          src="https://datafa.st/js/script.js"
          data-allow-localhost="true"
        ></script>
      </head>
      <body className={` ${geistMono.variable}`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
