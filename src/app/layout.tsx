import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ApplyFonts from "@/components/ApplyFont";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "DAMAC",
  description: "This app is from Harbour lights",
  icons: {
    icon: "/favicon.ico",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ApplyFonts />
        {children}
      </body>
    </html>
  );
}
