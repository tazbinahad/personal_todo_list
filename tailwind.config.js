/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#14b8a6",
        "primary-light": "#5eead4",
        "primary-dark": "#0f766e",
        secondary: "#64748b",
        "secondary-light": "#cbd5e1",
        "secondary-dark": "#475569",

        "body-bg": "#ffff",
        "body-bg-dark": "#f6f6f6",
      },
      fontSize: {
        heading: "2rem",
        large: "1.5rem",
        medium: "1rem",
        small: "0.8rem",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        default: "780px",
      },
    },
  },
  plugins: [],
};
