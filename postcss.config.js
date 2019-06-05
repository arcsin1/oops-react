module.exports = {
  plugins: [
    /* eslint global-require: off */
    require('autoprefixer')({
      browsers: ['last 5 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 9'],
    }),
  ],
}
