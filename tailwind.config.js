module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#663399',
          secondary: '#0d96f2',
          highlight: '#f1defa'
        }
      },
      gridTemplateColumns: {
        auto1fr: ['auto 1fr']
      },
      minHeight: {
        card: '240px',
        full: '100%',
        vh: '100vh'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
