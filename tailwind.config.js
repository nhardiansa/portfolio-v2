module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'bounce-short': 'mantul 1s infinite'
      },
      keyframes: {
        mantul: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      backgroundImage: theme => ({
        'github' : "url('/icons/github.svg')",
        'telegram' : "url('/icons/telegram.svg')",
        'linkedin' : "url('/icons/linkedin.svg')",
        'email' : "url('/icons/email.svg')",
      }),
    },
    container: {
      center: true,
    },
    fontFamily: {
      'inter': 'Inter, sans-serif',
      'coba': 'Scheherazade, serif',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
