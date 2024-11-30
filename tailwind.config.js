/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bugbug: {
          50: "#EFF2E8",
          100: "#dfe3d5",
          400: "#375845",
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
  },
  plugins: [],
};
