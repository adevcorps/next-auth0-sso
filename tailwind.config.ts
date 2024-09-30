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
    screens: {
      'xxs': '350px',
      'xs': '480px', // Custom breakpoint
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      // Array format:
      // 'roboto': ['Roboto', 'sans-serif'],
      // 'lato': ['Lato', 'sans-serif'], 
      // "roboto" : ['Roboto', 'sans-serif'],
      // "lato" : "var(--font-lato)",
      // 'sans': "var(--font-open-sans)",
    }
  },
  plugins: [],
};
export default config;
