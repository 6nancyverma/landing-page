import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import ApplyFonts from "@/components/ApplyFont";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DAMAC",
  description: "This app is from Harbour lights",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ApplyFonts />
        {children}
      </body>
    </html>
  );
}
