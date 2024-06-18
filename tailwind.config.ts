import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 1s linear 1",
        wiggle: "wiggle 1s ease-in-out infinite",
        "move-border": "move-border 2s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "move-border": {
          "0%": {
            borderWidth: "2px",
            boxShadow: "0 0 transparent",
          },
          "50%": {
            borderWidth: "4px",
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
          },
          "100%": {
            borderWidth: "2px",
            boxShadow: "0 0 transparent",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
