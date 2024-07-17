/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'Light-Grayish-Cyan': 'hsl(180, 52%, 96%)',
        'Breaker-Bay': 'hsl(180, 29%, 50%)',
        'Light-Grayish-cyan-200': 'hsl(180, 31%, 95%)',
        'Dark-Grayish-Cyan': 'hsl(180, 8%, 52%)',
        'Very-Dark-Grayish-Cyan': 'hsl(180, 14%, 20%)',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/bg-header-desktop.svg')",
      },
    },
  },
  plugins: [],
};
