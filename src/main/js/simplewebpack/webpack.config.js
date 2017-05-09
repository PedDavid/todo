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
        test: /\.(js|jsx)?$/,
        loader: 'standard-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.(js|jsx)?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'react' ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader' ,'css-loader', 'sass-loader' ]
      }
    ]
	},
	devServer: {
	  publicPath: resolve(__dirname, '/dist/')
	}
}
