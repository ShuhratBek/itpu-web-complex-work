// PostCSS configruation
const purgecss = require('@fullhuman/postcss-purgecss');
const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = (cfg) => {

  const devMode = (cfg.env === 'development');

  return {
    map: devMode ? 'inline' : null,
    plugins: [
      postcssImport(),
      autoprefixer(),
      devMode ? null : cssnano(),
      purgecss({
        content: ['./**/*.html']
      })
    ]

  };

};
