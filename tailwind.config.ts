import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#FF385C", dark: "#E00B41", soft: "#FFF1F3" },
        ink: { DEFAULT: "#222222", muted: "#717171" },
        line: "#DDDDDD",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Circular", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "sans-serif"],
      },
      boxShadow: {
        card: "0 6px 16px rgba(0,0,0,0.12)",
        pill: "0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)",
      },
      borderRadius: { xl2: "1rem" },
    },
  },
  plugins: [],
};
export default config;
