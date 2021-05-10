module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      'black': 'var(--black)',
      'white': 'var(--white)',
      'off-white': 'var(--off-white)',
      'red': 'var(--red)',
      'opacity': 'var(--black-light)',
      'opacity-2': 'var(--white-light)',
    },
    fontSize: {
      'xzs': 'var(--fz-xxs)',
      'xs': 'var(--fz-xs)',
      'sm': 'var(--fz-sm)',
      'base': 'var(--fz-md)',
      'lg': 'var(--fz-lg)',
      'xl': 'var(--fz-xl)',
      'xxl': 'var(--fz-xxl)',
      'heading': 'var(--fz-heading)',
      'main': 'var(--fz-main)',
      'name': 'var(--fz-name)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
