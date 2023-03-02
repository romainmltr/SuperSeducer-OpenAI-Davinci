module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
    },
    screens: {

      'xs': '320px',
        // => @media (min-width: 320px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'SkyLight': '#F1FCFD',
      'Sky': '#C7EEFF',
      'SkyDark': '#4D6DE3',
      'MarronSky': '#393737',
      'silver': '#ecebff',
    },

  },
  plugins: [],
}
