// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}', // your app directory files
    './components/**/*.{js,jsx,ts,tsx}', // your components folder
  ],
  theme: {
    extend: {
       keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        popUp: {
          '0%': { transform: 'scale(0.6)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceHover: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.4s ease-out forwards',
        scaleIn: 'scaleIn 0.3s ease-out forwards',
        popUp: 'popUp 0.3s ease-out forwards',
        bounceHover: 'bounceHover 0.6s ease-in-out infinite',
      },
      colors: {
        brandBlue: '#1E40AF',    // custom blue
        brandGreen: '#10B981',
        brandGold: '#FFD700',   // custom green
        brandRed: '#EF4444',     // custom red
      },
    },
  },
  plugins: [],
};
