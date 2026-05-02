import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1F3A5F",
          deep: "#152A47",
          50: "#EEF2F8",
          100: "#D9E1EE",
          200: "#B6C5DC",
          300: "#8FA4C2",
          400: "#5B7AA0",
          500: "#1F3A5F",
          600: "#1A3253",
          700: "#152A47",
          800: "#10213A",
          900: "#0C1A30",
        },
        orange: {
          DEFAULT: "#BF5700",
          hover: "#A24800",
          50: "#FBEFE3",
          100: "#F8DEC4",
          500: "#BF5700",
          600: "#A24800",
          700: "#823A00",
        },
        cream: {
          DEFAULT: "#FAF6EE",
          warm: "#F1E9D6",
          dark: "#E5DBC0",
        },
        star: {
          DEFAULT: "#E1B546",
          deep: "#B68D2A",
        },
        ink: "#1B2330",
        muted: {
          DEFAULT: "#5C6776",
          soft: "#8A95A4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "14px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(21,42,71,0.06), 0 8px 24px rgba(21,42,71,0.06)",
        "card-hover": "0 2px 4px rgba(21,42,71,0.08), 0 16px 36px rgba(21,42,71,0.10)",
        cta: "0 4px 14px rgba(191,87,0,0.25)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.5)",
      },
      backgroundImage: {
        "lone-star": "url('/brand/lone-star.svg')",
        "cream-grad": "linear-gradient(180deg,#FAF6EE 0%,#F1E9D6 100%)",
        "navy-grad": "linear-gradient(135deg,#152A47 0%,#1F3A5F 60%,#2B4F7F 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
