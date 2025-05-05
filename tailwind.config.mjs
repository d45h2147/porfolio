/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2ca099",
          50: "#f2fbfa",
          100: "#d3f4ef",
          200: "#a7e8e0",
          300: "#72d6cc",
          400: "#45bcb4",
          500: "#2ca099",
          600: "#1f7a77",
          700: "#1e6765",
          800: "#1c5352",
          900: "#1c4545",
          950: "#0a2829",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
