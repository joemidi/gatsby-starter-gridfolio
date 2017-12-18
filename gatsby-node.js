exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'develop':
      config.preLoader('eslint-loader', {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /gatsby-\w+.js/]
      });

      break;
  }
  return config;
};
