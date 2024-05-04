/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto", sans-serif'],
        montserrat: ['"Montserrat", sans-serif'],
      },
      colors: {
        primary: '#27366f',
        secondary: '9eb7da',
        tertiary: '#2e3752',
        lavender: '#dfe5f5',
        pink: 'd2bbc4',
      },
    },
  },
  plugins: [],
};
