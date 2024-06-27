// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#1a1a1a',
        background: '#ffffff',
        text: '#333333',
        dark: '#1a1a1a',
        darkBackground: '#1a1a1a',
        darkText: '#ffffff',
      },
      fontFamily: {
        main: ['Helvetica', 'Arial', 'sans-serif'],
        code: ['Courier', 'monospace'],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '32px',
        xl: '64px',
      },
      screens: {
        mobile: '576px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1200px',
      },
    },
  },
  plugins: [],
};