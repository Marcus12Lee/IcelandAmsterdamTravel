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
        // Dark purple theme
        surface: {
          DEFAULT: "#1a1620",
          light: "#221c2e",
          dark: "#0f0a14",
        },
        accent: {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
          dark: "#7c3aed",
        },
        // Icelandic Winter – kept for compatibility
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
        /** Strong light blue for map/place links (Iceland page, self-drive navigation) */
        "map-link": {
          DEFAULT: "#0ea5e9",
          light: "#7dd3fc",
          bright: "#bae6fd",
          border: "#38bdf8",
        },
      },
      fontFamily: {
        sans: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
        display: ["ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-winter":
          "linear-gradient(165deg, #0f172a 0%, #082f49 35%, #0c4a6e 70%, #075985 100%)",
        "gradient-aurora":
          "linear-gradient(180deg, #0e7490 0%, #0c4a6e 50%, #1e293b 100%)",
        "gradient-glow":
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139, 92, 246, 0.18) 0%, transparent 55%)",
      },
      animation: {
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "countdown-plane": "countdown-plane 3s ease-in-out infinite",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        "countdown-plane": {
          "0%, 100%": { transform: "translateX(0) scale(1)" },
          "50%": { transform: "translateX(120px) scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
