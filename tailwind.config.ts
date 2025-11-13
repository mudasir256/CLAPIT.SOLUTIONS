/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-clip-path"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/aspect-ratio"),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#f84b07",
        background: "#efefef",
        dark: "#161616",
        light: "#E0E0E0",
        medium: "#9B9FA6",
        darkMedium: "#54565A",
        lightMedium: "#F85C1E",
      },
      clipPath: {
        "custom-cut":
          "polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)",
      },
    },
  },
} satisfies Config;
