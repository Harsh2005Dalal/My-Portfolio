export default {
  plugins: {
    '@tailwindcss/postcss': {
      optimize: {
        minify: false,   // <--- This disables minification, which is currently buggy only in the Vercel build context
      },
    },
    autoprefixer: {},
  },
}
