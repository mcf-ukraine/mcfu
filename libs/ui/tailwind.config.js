const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    join(
      __dirname,
      "{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}"
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: { ...colors.sky, DEFAULT: colors.sky[600] },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
