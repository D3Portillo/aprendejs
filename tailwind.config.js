module.exports = {
  purge: ["./pages/**/*.vue", "./components/**/*.vue"],
  theme: {
    colors: {
      white: "white",
      whiter: "#F8F8F8",
      black: "black",
      yellow: "#FFF50A",
      darker: "#eeeeee",
      transparent: "rgba(0,0,0,0)",
    },
    fontFamily: {
      title: ["Cutive", "Open Sans"],
    },
    extend: {
      zIndex: {
        1: 1,
      },
    },
  },
  variants: {
    borderStyle: ["hover"],
  },
  plugins: [],
}
