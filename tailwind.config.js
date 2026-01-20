/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffbf00',
          dark: '#e6a800',
        },
        dark: {
          bg: '#1e1e1e',
          card: '#2a2a2a',
          border: '#3a3a3a',
          text: '#a0a0a0',
          textLight: '#e0e0e0',
        },
        light: {
          bg: '#f5f5f5',
          card: '#ffffff',
          border: '#e5e5e5',
          text: '#4a4a4a',
          textLight: '#1a1a1a',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

