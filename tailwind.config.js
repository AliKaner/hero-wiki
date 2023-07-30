export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '435px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#f5f6fa",

        darkPrimary:'#202020',
        darkSecondary:'#151515',

        action:'#e62429',
        calm:'#05a6e1',
      },
      fontFamily: {
        comic: "Comic",
        spider: "Spider",
      },
    },
  },
  plugins: [],
};