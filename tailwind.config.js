module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/2-screen': '50vw',
        'fit-content': 'fit-content',
      },
      translate: {
        'screen': '100vw',
        '1/2-screen': '50vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
