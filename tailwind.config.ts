import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textSecondary: "var(--text-secondary)",
        textThird: "var(--text-third)",
        borderColor:"var(--border-color)",
        borderColorHover:"var(--border-hover)"
      },
      animationDuration: {
        "300ms": "300ms",
        "900ms": "900ms",
      },
      animationDelay: {
        "300ms": "300ms",
        "900ms": "900ms",
      },
    },
  },
  plugins: [],
};

export default config;
