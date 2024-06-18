import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ApplyFonts from "@/components/ApplyFont";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "DAMAC landing page ",
  description: "This app is from harbour lights",
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
