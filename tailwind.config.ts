import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "coder-bg": 'url(https://wallpapercave.com/wp/wp6076938.jpg)'
      },
      backgroundColor: {
        "white-trans": "rgba(255, 255, 255, 0.16)"
      },
      height: {
        "head-section": "calc(100vh - 128px)"
      },
      maxHeight: {
        "head-section": "calc(100vh - 128px)"
      },
      borderRadius: {
        "from-square": "100% 0% 100% 0% / 0% 100% 0% 100% ",
        "from-circle": "58% 42% 50% 50% / 39% 59% 41% 61% "
      },
      animation: {
        "cicle-to-square": "cicleToSquare"
      },
      keyframes: {
        "circleToSquare": {
          "0%, 50%": { borderRadius: "58% 42% 50% 50% / 39% 59% 41% 61%" },
          "100%": { borderRadius: "100% 0% 100% 0% / 0% 100% 0% 100%" }
        }
      }
    },
  },
  plugins: [],
  
};
export default config;
