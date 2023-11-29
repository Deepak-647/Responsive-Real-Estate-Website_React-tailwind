/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f3e72",
        secondary: "rgb(140,139,139)",
        black: "#131110",
        blue: "#4066ff",
        lightBlue: "#eeeeff",
        shadow: "0px 23px 21px -8px rgba(136, 160, 255, 0.25)",
        imageradius : "rgba(255,255,255,0.12)"
      },
       
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
