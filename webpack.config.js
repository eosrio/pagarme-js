// noinspection WebpackConfigHighlighting

const path = require('path')

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      crypto: false,
    },
  },
  output: {
    filename: 'pagar-me-bundle.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
}
