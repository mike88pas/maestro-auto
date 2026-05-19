import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        gold: "var(--gold)",
        "gold-deep": "var(--gold-deep)",
        accent: "var(--accent)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        brand: "var(--ease)",
      },
      transitionDuration: {
        "brand-fast": "var(--dur-fast)",
        "brand-mid": "var(--dur-mid)",
        "brand-slow": "var(--dur-slow)",
      },
      borderRadius: {
        brand: "var(--radius)",
      },
      letterSpacing: {
        "wider-2": "0.06em",
        "wider-3": "0.08em",
        "wider-4": "0.12em",
      },
      maxWidth: {
        prose: "65ch",
        container: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
