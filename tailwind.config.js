/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      height: {
        667: "41.6875rem",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [],
};
