/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'g8-regular': ['G8321-Regular', 'sans-serif'],
        'g8-thin': ['G8321-Thin', 'sans-serif'],
        'g8-semibold': ['G8321-SemiBold', 'sans-serif'],
        'g8-black': ['G8321-Black', 'sans-serif'],
        'g8-bold': ['G8321-Bold', 'sans-serif'],
        'g8-extrabold': ['G8321-ExtraBold', 'sans-serif'],
        'g8-extralight': ['G8321-ExtraLight', 'sans-serif'],
        'g8-light': ['G8321-Light', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
