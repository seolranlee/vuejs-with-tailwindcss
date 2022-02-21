module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Noto Sans KR", "Malgun Gothic", "sans-serif"],
    },
    extend: {
      lineHeight: {
        tag: "1.58",
      },
      textColor: {
        primary: "#00c7ae",
        tag: "#888888",
      },
    },
    // textColor: {
    //   'primary': '#00c7ae',
    //   'title': '#2d2d2d',
    //   'gray-200': '#e2e2e2',
    //   'gray-400': '#a9a9a9'
    // }
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
