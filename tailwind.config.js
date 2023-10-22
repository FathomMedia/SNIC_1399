/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#102557",
        secondary: "#F1881F",
        gradient1: "#18376D",
        gradient2: "#0B284D",
      },
      backgroundImage: (theme) => ({
        "gradient-primary": `linear-gradient(to bottom, ${theme(
          "colors.gradient1"
        )}, ${theme("colors.gradient2")})`,
      }),
    },
  },
  plugins: [],
};
