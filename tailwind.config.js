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
        sm: "420px", // Use for small mobile. (not necessary)
        md: "790px", // Use for mobile.
        m_md: "1190px", // Use for tablet.
        lg: "1720px",

        // special RWD size.
        Spec_RWD01: "590px", //Mobile phone board pencil protrudes from the edge of the table
        Spec_RWD02: "490px", //Mobile phone right site adjust.
        Spec_RWD03: "1024px", //tablet adjust.
        Spec_RWD04: "1300px",
        Spec_RWD05: "860px",
      },
      // Animation
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
        bounceWithPause: {
          "0%, 100%": {
            transform: "translateY(-10%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        smallRotate: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-30deg)" },
        },
        Yscale: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(0.95)" },
        },
        Waving: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        fadeInOut: "fadeInOut 2s ease-in-out infinite",
        fadeIn: "fadeIn 5s ease-in-out infinite",
        GettingSmall: "GettingSmall 5s ease-in-out infinite",
        smallBounce1: "smallBounce 3s infinite",
        smallBounce2: "smallBounce 2s infinite",
        smallBounce3: "smallBounce 6s infinite",
        bounceWithPause: "bounceWithPause 0.8s ease-in-out infinite",
        smallRotate: "smallRotate 3s ease-in-out infinite",
        Yscale: "Yscale 3s ease-in-out infinite",
        Waving: "Waving 0.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
