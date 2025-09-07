/** @type {import('tailwindcss').Config} */
export default {
  purge: [],
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#ff5a5f',
        'brand-secondary': '#8d992a',
        'brand-accent': '#ffcc00',
    },
  },
  plugins: [],
}
}
