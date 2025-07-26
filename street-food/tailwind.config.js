// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B00",
        "primary-dark": "#E05D00",
        secondary: "#4CAF50",
        dark: "#333333",
        light: "#F8F9FA",
        gray: "#6C757D",
        "light-gray": "#E9ECEF",
      },
      boxShadow: {
        custom: "0 4px 12px rgba(0,0,0,0.1)",
      },
      borderRadius: {
        custom: "8px",
      }
    },
  },
  plugins: [],
}