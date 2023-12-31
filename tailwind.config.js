/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        48: 'repeat(48, minmax(0, 1fr))',
      },
      gridTemplateColumns: {
        week: '100px repeat(7, 1fr)',
      },
    },
  },
  plugins: [],
};
