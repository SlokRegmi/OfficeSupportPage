const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./context/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#3B82F6",
        primary: "#730606",
      },
      boxShadow: {
        gmbf: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        // gmbf: "0px 0px 1px 2px rgba(0, 0, 0, 1)",
      },
    },
    screens: {
      xs: "475px",
      xxl: '1520px',
      ...defaultTheme.screens
    },
  },
  plugins: [],
};

