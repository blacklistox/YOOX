/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        'pdsb-green': {
          50: '#e6f7ed',
          100: '#ccefdb',
          200: '#99dfb7',
          300: '#66cf93',
          400: '#33bf6f',
          500: '#00A651', // Primary green
          600: '#008541',
          700: '#006431',
          800: '#004220',
          900: '#002110',
        },
        'pdsb-blue': {
          50: '#e6f0f7',
          100: '#cce1ef',
          200: '#99c3df',
          300: '#66a5cf',
          400: '#3387bf',
          500: '#0072BC', // Primary blue
          600: '#005b96',
          700: '#004471',
          800: '#002e4b',
          900: '#001726',
        },
        'pdsb-red': {
          50: '#fce9e9',
          100: '#f9d3d4',
          200: '#f3a7a9',
          300: '#ed7b7e',
          400: '#e74f53',
          500: '#ED1C24', // Primary red
          600: '#be161d',
          700: '#8e1116',
          800: '#5f0b0e',
          900: '#2f0607',
        },
      },
    },
  },
  plugins: [],
};