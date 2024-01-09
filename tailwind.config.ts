import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        upstairs: "up 1s linear infinite",
      },
      keyframes: {
        up: {
          "0%, 100%": {
            transform: "translate(-5px, 0px)",
            rotate: "-45deg",
          },
          "50%": { transform: "translate(15px, 0px)", rotate: "-45deg" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
