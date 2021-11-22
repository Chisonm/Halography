const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: colors.black,
			white: colors.white,
			gray: colors.gray,
			orange: colors.orange,
			yellow: colors.yellow,
			green: colors.green,
			red: colors.red,
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      link_inactive: 'var(--link-color-inactive)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
