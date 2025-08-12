/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50",
        accent: "#16A085",
        bgLight: "#F8F9FA",
      },
      fontFamily: {
        heading: ["Merriweather", "serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
