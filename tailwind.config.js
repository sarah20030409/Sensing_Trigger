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
        md: "730px",
        m_md: "940px",
        lg: "1250px",
      },
    },
  },
  plugins: [],
};
