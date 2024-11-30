/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bugbug: {
          25: "#EFF2E8",
          50: "#f2f7f4",
          100: "#e0ebe2",
          150: "#AFC083",
          200: "#c4d6c9",
          300: "#9cb9a6",
          400: "#70977f",
          500: "#507961",
          600: "#375845",
          700: "#304c3d",
          800: "#283d31",
          900: "#213329",
          950: "#121c17",
        },
      },
      translate: {
        "300px": "300px",
        "-300px": "-300px",
      },
    },
    fontFamily: {
      inclusivesans: ["Inclusive Sans", "sans-serif"],
    },
    screens: {
      ssm: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [],
};
