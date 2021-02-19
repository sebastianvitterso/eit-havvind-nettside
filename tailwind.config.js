module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '88': '22rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
      },
      minHeight: {
        '32': '8rem',
      },
      minWidth: {
        '48': '12rem',
      },
      zIndex: {
        '1000': '1000',
        '2000': '2000',
        '3000': '3000',
        '4000': '4000',
        '5000': '5000',
        '6000': '6000',
        '7000': '7000',
        '8000': '8000',
        '9000': '9000',
        '9999': '9999',
        '10000': '10000',
        '20000': '20000',
        '30000': '30000',
        '40000': '40000',
        '50000': '50000',
        '60000': '60000',
        '70000': '70000',
        '80000': '80000',
        '90000': '90000',
        '99999': '99999',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'odd', 'even'],
      borderColor: ['active'],
    },
  },
  plugins: [],
}
