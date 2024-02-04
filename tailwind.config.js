module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/layout/**/*.{js,jsx,ts,tsx}',
  ],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        body: '#FFFFFF',
        white: '#FFFFFF',
        black: '#010101',
        transparent: 'transparent',
        primary: {
          DEFAULT: '#E26031',
          light: '#f97316',
        },
        secondary: {
          DEFAULT: '#EFA721',
          light: '#96D405',
        },
        info: {
          DEFAULT: '#0043BA',
        },
        gray: {
          dark: '#1E1E1E',
          medium: '#363636',
          light: '#D1D0D0',
        }, //tw-text-custom-facebook
        custom: {
          instagram: '#f09433',
          facebook: '#3b5998',
          twitter: '#00acee',
        },
      },
      container: {
        center: true,
        margin: '0px',
        padding: {
          DEFAULT: '1rem',
          xl: '40px',
          '2xl': '128px',
        },
      },
      boxShadow: {
        xl: '0px 6px 21px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};
