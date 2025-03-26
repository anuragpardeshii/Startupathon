/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      animation: {
        "background-pan": "background-pan 3s linear infinite",
      },
      keyframes: {
        "background-pan": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
