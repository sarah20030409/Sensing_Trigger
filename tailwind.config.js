/** @type {import('tailwindcss').Config} */
// module.exports =
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        20: "20px",
        15: "15px",
      },
      padding: {
        15: "15px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor", // Include values like 'transparent' and 'currentColor' if you want to use default colors in your project.

        //=====basic color=====
        Cus_Orange: "#F96407",
        Cus_Blue: "#274CFF",

        // ===================
      },
      fontFamily: {
        Inter: ["Inter"],
      },
      fontSize: {
        15: "15px",
        32: "32px",
      },
      screens: {
        sm: "420px",
        md: "790px",
        m_md: "1190px",
        lg: "1920px",

        // special RWD size.
        Spec_RWD: "590px", //Mobile phone board pencil protrudes from the edge of the table
      }, // Animation
      keyframes: {
        fadeInOut: {
          "0%": {
            opacity: "0.3",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0.3",
          },
        },
        fadeIn: {
          "0%,100%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
        },
        GettingSmall: {
          "0%, 100%": { transform: "scale(1.0)" },
          "50%": { transform: "scale(0.95)" },
        },
        smallBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      animation: {
        fadeInOut: "fadeInOut 2s ease-in-out infinite",
        fadeIn: "fadeIn 5s ease-in-out infinite",
        GettingSmall: "GettingSmall 5s ease-in-out infinite",
        smallBounce1: "smallBounce 3s infinite",
        smallBounce2: "smallBounce 2s infinite",
        smallBounce3: "smallBounce 6s infinite",
      },
    },
  },
  plugins: [],
};
