/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        ordinary: "var(--ordinary-text)",
        white: "var(--white-text)",
        purple: "var(--purple-text)",
        grey: "var(--grey-text)",
        lightgrey: "var(--lightgrey-text)",
        purplebg: "var(--purple-bg)",
      },
      fontFamily: {
        nunito: "var(--family-nunito)",
      },
      fontSize: {
        sm: "var(--fs-sm)",
        md: "var(--fs-md)",
        mdbig: ["var(--fs-mdbig)", "21px"],
        lg: "var(--fs-lg)",
      },
    },
  },
  plugins: [],
};
