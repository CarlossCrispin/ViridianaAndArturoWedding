/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        copper: {
          50: '#fdf6ec',
          100: '#fcead9',
          200: '#fad5b2',
          300: '#f6ba8a',
          400: '#f3a566',
          500: '#ef8a45',
          600: '#ec7024',
          700: '#ca5c1c',
          800: '#a84915',
          900: '#85350d',
        },
        brown: {
          50: '#FDF7F3',
          100: '#FAEFE5',
          200: '#F6E6D6',
          300: '#F2DEC8',
          400: '#EEC6AB',
          500: '#EABD9C',
          600: '#C18D6B',
          700: '#9E6D49',
          800: '#7B4D27',
          900: '#582E06', // Tonos de cobre hasta aquí
        },
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
          '100%': {
            borderColor: 'white',
          },
        },
      },
      animation: {
        typing: 'typing 3s steps(20) , blink .7s ',
      },
      'animate-slide-up': {
        from: {
          transform: 'translatex(100%)',
          opacity: 0,
        },
        to: {
          transform: 'translatex(0)',
          opacity: 1,
        },
      },
    },
  },
  plugins: [],
};
