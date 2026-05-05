const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'), // build isminde bir klasör oluşturup onun bundle'ını alıyor npm'e sadece bu gidecek
    globalObject: 'this',
    publicPath: "/",
    library: {
      name: 'tebuidesign',
      type: 'umd',
    },
    clean:true, //build dizinini her seferinde temizle
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    hot: true,
    watchFiles: ['src/**/*'],
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env',{modules:false}], '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
              outputPath: 'fonts/'
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    '@emotion/react': '@emotion/react',
    '@emotion/styled': '@emotion/styled',
    '@mui/material': '@mui/material',
  },
  devtool: 'source-map',
}; 
