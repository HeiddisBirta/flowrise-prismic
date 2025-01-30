import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-nunito-sans)", "sans-serif"],
         display: ["var(--font-nunito)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
