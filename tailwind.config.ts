import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        bgPrimary: "#010316",
        bgSecondary: "#040210",
        secondary: "#13132d",
        fade: "linear-gradient(90deg, #3540E8 0%, #E41AD6 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
