const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
	entry: './app/index.js',
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
	  clientLogLevel: 'error',
	  publicPath: resolve(__dirname, '/dist/')
	}
}
