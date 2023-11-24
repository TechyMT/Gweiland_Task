/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "cryptoraggies": "#FF8A8A",
        "pendulum": "#000000",
        "bitfins": "#091F2C",
        "futurefest": "#000000",
        "$hoskey": "#236BD3",
        "vudubrigada": "#000000",
      }
    },
  },
  plugins: [],
};
