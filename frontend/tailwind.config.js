/** @type {import('tailwindcss').Config} */

export default {
  content: ["./*.jsx", "./src/components/*.jsx", "./src/pages/*.jsx"],
  theme: {
    extend: {
      colors: {
        "color-brand--1": "var(--color-brand--1)",
        "color-brand--2": "var(--color-brand--2)",
        "color-dark--0": "var(--color-dark--0)",
        "color-dark--1": "var(--color-dark--1)",
        "color-dark--2": "var(--color-dark--2)",
        "color-light--1": "var(--color-light--1)",
        "color-light--2": "var(--color-light--2)",
        "color-light--3": "var(--color-light--3)",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      screens: {
        md: "768px",
        lg: "1024px",
      },
      fontFamily: {
        manrope: ['"Manrope"', "sans-serif"],
        "fira-sans-condensed": ['"Fira Sans Condensed"', "sans-serif"],
        merriweather: ['"Merriweather"', "serif"],
        sofia: ['"Sofia"', "cursive"],
      },
    },
  },
  plugins: [],
};
