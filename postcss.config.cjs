// PostCSS configuration
module.exports = (cfg) => {
  // import tokens as variables
  const variables = require('./tokens.json');

  const dev = cfg.env === 'development';
  scss = cfg.file.extname === '.scss';
  return {
    map: dev ? { inline: false } : false,
    parser: scss ? 'postcss-scss' : false,
    plugins: [
      require('postcss-import')(),
      require('postcss-advanced-variables')({ variables }),
      require('postcss-nested')(),
      require('postcss-media-minmax')(),
      require('postcss-sort-media-queries')(),
      require('autoprefixer')(),
      dev ? null : require('cssnano')(),
    ],
  };
};
