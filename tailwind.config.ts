import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ice: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        frost: {
          white: "#f8fafc",
          silver: "#e2e8f0",
          slate: "#94a3b8",
          blue: "#64748b",
        },
        glacier: {
          light: "#a5f3fc",
          mid: "#22d3ee",
          deep: "#0891b2",
          dark: "#0e7490",
        },
      },
      fontFamily: {
        sans: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
        display: ["ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-winter":
          "linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%)",
        "gradient-aurora":
          "linear-gradient(180deg, #0e7490 0%, #0c4a6e 50%, #1e293b 100%)",
      },
      animation: {
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
