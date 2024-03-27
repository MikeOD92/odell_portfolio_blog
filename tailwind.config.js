/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   eggplant: "#0E0417",
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        oxygen: ["var(--font-oxygen)"],
        raleway: ["var(--font-raleway)"],
        fraktur: ["var(--font-fraktur)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")], /// Probably need to tailwind plug in
};
