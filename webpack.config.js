const path = require('path');

const config = {
  entry: {
    app: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
    contentBase: './dist',
  }
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {}
        if (argv.mode === 'production') {}
    return config;
}