module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '101': '1.01',
        '103': '1.03',
        '98': '0.98'
      },
      height:{
        'svh':'100svh'
      },
      screens: { // remove hover on mobile
        'betterhover': {'raw': '(hover: hover)'},
    }
    }
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          secondary: "#747fff",
          neutral: "#a6adbb",
        },
        coffee: {
          ...require("daisyui/src/theming/themes")["coffee"],
          neutral:"#777"
        },
      },
      "light", "dark", "black", "retro", "coffee", "cyberpunk", "valentine", "dracula"],
  },
}