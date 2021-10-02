module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F7FAFC',
        dark: '#1E2958',
        blue: '#5F7BF0',
        gray: '#A39E9E',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
