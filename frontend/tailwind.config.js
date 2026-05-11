/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1e3a5f",
          "navy-dark": "#15293f",
          "navy-darker": "#0f2235",
          red: "#e13030",
          "red-hover": "#c42828",
          "red-deep": "#a51e1e",
          gold: "#e8c547",
          cream: "#f5f3ee",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "Roboto",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 18px 40px -20px rgba(15,34,53,0.30)",
        "card-hover": "0 30px 60px -25px rgba(15,34,53,0.40)",
        soft: "0 4px 14px rgba(0,0,0,0.08)",
        "btn-red": "0 10px 22px -10px rgba(225,48,48,0.55)",
        "btn-red-hover": "0 14px 28px -10px rgba(225,48,48,0.70)",
        "ring-inset": "inset 0 0 0 1px rgba(255,255,255,0.06)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.06)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%) skewX(-12deg)" },
          "100%": { transform: "translateX(220%) skewX(-12deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-up-slow": "fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.9s ease-out both",
        "slow-zoom": "slow-zoom 18s ease-out forwards",
      },
    },
  },
  plugins: [],
};
