import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeColor: "#F49239",
        textColor: "#27272D",
        lightColor: "#F8F8F8",
        blueLightColor: "#A3BFD1"
      },
    },
  },
  plugins: [],
} satisfies Config;
