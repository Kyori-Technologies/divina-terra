/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/{pages,components}/**/*.{astro,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D49C55",
        secondary: "#3E392C",
        brand_golden: "#3E392D",
      },
    },
  },
};
