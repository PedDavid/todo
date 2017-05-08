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
      { test: /\.css$/, use: [ 'style-loader' ,'css-loader' ] }
    ]
	}
}
