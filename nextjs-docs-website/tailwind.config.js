module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        // Custom colors for themes
        primary: '#1DA1F2',
        secondary: '#14171A',
        dark: {
          background: '#121212',
          text: '#FFFFFF',
        },
        light: {
          background: '#FFFFFF',
          text: '#000000',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};