/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#c4b5fd',
      secondary: '#0a0a0a',
      primaryDark: '#a78bfa',
      gray100: '#f5f5f5',
      gray400: '#9ca3af',
      gray500: '#6b7280',
      gray600: '#4b5563',
      gray800: '#262626',
      slate200: '#f3f4f6',
      white: '#ffffff',
      bgError: '#ffe4e6',
      errorText: '#f43f5e'
    },
    extend: {},
  },
  plugins: [],
}

