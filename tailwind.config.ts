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
        authformbackground: "#0D0040"
      },
    },
    fontFamily: {
      // Array format:
      'sans': ['Open Sans', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'], 
    }
  },
  plugins: [],
};
export default config;
