module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#161616",
      gray: "#404040",
      offWhite: "#FFF9F4",
      white: "#FFFFFF",
      primary: "#FF9090",
      secondary: "#106bF4",
      transparent: "transparent",
    },
    extend: {},
  },
  variants: {
    extend: {
      scale: ["group-hover"],
      display: ["group-hover"],
    },
  },
  plugins: [],
};
