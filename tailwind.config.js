/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#252422", secondary: "#ccc5b9", tertiary: "#eb5e28" },
    },
    fontFamily: {
      irsans: ["IranianSans"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "870px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
