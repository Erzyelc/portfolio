import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#FFBE62',
        // accent: '#FFBE62',
        accent: '#35C9E280',
        // accent:
        //   'linear-gradient(134.96deg, rgba(53, 201, 226, 0.5) 0.02%, #35E6BB 100.02%)',
        // primary: 'rgb(var(--color-primary) / <alpha-value>)',
        background: {
          1: 'rgb(var(--color-bkg) / <alpha-value>)',
          2: 'rgb(var(--color-bkg-2) / <alpha-value>)',
        },
        white: {
          900: '#FFFFFF',
          800: '#F3F8FF',
          500: '#6F74A7',
        },
        black: {
          0: '#000000',
          200: '#151E2C',
          300: '#192333',
          400: '#778295',
        },
      },
      fontSize: {
        sm: ['0.875rem', '155%'],
        smallBold: ['0.875rem', '145%'],
      },
    },
  },
  plugins: [],
};
export default config;
