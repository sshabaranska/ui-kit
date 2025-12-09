/** @type {import('tailwindcss').Config} */

import tailwindTheme from "./tailwind.theme";

export default {
  content: ["src/components/**/*.tsx", "!src/components/**/*.stories.tsx"],
  theme: { ...tailwindTheme },
};