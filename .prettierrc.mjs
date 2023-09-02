/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  "arrowParens": "always",
  "singleQuote": false,
  "jsxSingleQuote": false,
  "tabWidth": 2,
  "trailingComma": "none",
  "semi": true,
  "endOfLine": "auto",
};