/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#252422", secondary: "#ccc5b9", tertiary: "#eb5e28" },
    },
  },
  plugins: [],
};
