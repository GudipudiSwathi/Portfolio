module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#F7F3FA',
          100: '#ECE6F6',
          200: '#E6D7F7',
          300: '#D9BFEF',
          400: '#C8A2C8', // primary lavender
          500: '#B18CC2'
        },
        peach: {
          50: '#FFF6F0',
          100: '#FFEEE6',
          200: '#FFDCC8',
          300: '#FFCBA4', // soft peach
          400: '#FFBC8F'
        },
        neutral: {
          100: '#FFFFFF',
          200: '#F5F5F7',
          300: '#F0EEF6',
          400: '#F8F6FA',
          700: '#4A4A4A'
        }
      },
      borderRadius: {
        'lg-2xl': '20px',
        '3xl-soft': '28px'
      },
      boxShadow: {
        'soft-lg': '0 8px 30px rgba(18,24,39,0.06)'
      }
    },
  },
  plugins: [],
};
