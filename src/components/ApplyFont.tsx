"use client";

import React from "react";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "500",
});

const ApplyFonts = () => {
  return (
    <style jsx global>{`
      h1 {
        font-family: ${oswald.style.fontFamily}, sans-serif;
      }
    `}</style>
  );
};

export default ApplyFonts;
