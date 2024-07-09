import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,vue}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Jetbrains Mono"', defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}
