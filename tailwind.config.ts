import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f2f6fb",
          100: "#e1ebf6",
          700: "#16436f",
          800: "#103456",
          900: "#0a243d",
          950: "#06192c"
        },
        teal: {
          500: "#14b8a6",
          600: "#0d9488"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
