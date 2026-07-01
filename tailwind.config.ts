import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#7a1d1d",
          500: "#741b1b",
          900: "#5a0e0e",
        },
        secondary: "#7630a1",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Courier", "monospace"],
        exo: ["'Exo 2'", "sans-serif"],
      },
      container: {
        center: true,
        padding: "0",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
