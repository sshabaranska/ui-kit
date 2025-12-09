/** @type {import('tailwindcss').Config} */

import tailwindTheme from "./tailwind.theme";

export default {
  content: ["src/**/*.{tsx,css,js,mdx}", ".storybook/**/*.{tsx,css,js,mdx}"],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    extend: { ...tailwindTheme },
  },
  plugins: [],
}
