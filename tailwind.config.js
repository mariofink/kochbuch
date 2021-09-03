module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      serif: [
        "Hoefler Text",
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
