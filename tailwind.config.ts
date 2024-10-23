import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        myGray: '#C9DAEA',
        myGreen: '#00B295',
        myPurple: '#AB2346',
      },
      fontSize: {
        md: '1.075rem',
      },
    },
  },
  plugins: [],
};
export default config;
