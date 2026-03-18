module.exports = {
  plugins: [
    require('postcss-import'),  // must be first — resolves @imports before anything else
    require('cssnano')({
      preset: 'default',
    }),
  ],
};