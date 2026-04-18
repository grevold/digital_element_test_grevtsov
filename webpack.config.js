const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

  return {
    entry: './src/index.ts',
    output: {
      filename: 'bundle.[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),
      ...(isDev
        ? []
        : [
            new MiniCssExtractPlugin({
              filename: 'styles.[contenthash].css',
            }),
          ]),
    ],
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 3000,
      hot: true,
      open: true,
    },
    devtool: isDev ? 'source-map' : false,
  };
};
