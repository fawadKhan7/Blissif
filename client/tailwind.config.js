
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  theme: {
    extend: {
      colors: theme => ({
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        background: theme.colors.background,
        text: theme.colors.text
      }),
      boxShadow: {
        '2xl': theme => `0 25px 50px -12px ${theme('colors.secondary')}`
      },
      boxShadow: {

      },
      height: {
        '128': '36rem',
      },
      width: {
        '128': '36rem',
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
