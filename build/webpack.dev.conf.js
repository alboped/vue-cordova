var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = require('../config');

var baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
	entry: {
		app: [
			'webpack-hot-middleware/client?noInfo=true&reload=true'
		]
	},
	devtool: '#cheap-module-eval-source-map',
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: config.build.index,
			template: './src/index.html',
			inject: true
		})
	]
});