const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
	entry: './index.js',
	output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
	},
	module: {
		rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'react' ]
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [ 'style-loader' ,'css-loader', 'sass-loader' ]
      },
      {
        test: /\.(png|ttf|eot|svg|woff2?)$/,
        loader: 'file-loader?publicPath=dist/'
      }
    ]
	},
	devServer: {
	  publicPath: resolve(__dirname, '/dist/')
	}
}
