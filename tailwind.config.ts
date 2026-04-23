/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#1D4ED8', // Custom blue
        customGreen: '#22C55E', // Custom green
      },
      animation: {
        bounceFast: 'bounce 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};