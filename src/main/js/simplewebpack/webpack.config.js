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
      { test: /\.scss$/, use: [ 'style-loader' ,'css-loader', 'sass-loader' ] }
    ]
	},
	devServer: {
	  noInfo: true,
	  publicPath: resolve(__dirname, '/dist/')
	}
}
