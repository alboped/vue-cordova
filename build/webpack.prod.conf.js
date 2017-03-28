var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var utils = require('./utils');
var config = require('../config');
var baseConfig = require('./webpack.base.conf');
var env = config.build.env

module.exports = merge(baseConfig, {
	entry: {
		vendor: config.build.vendor
	},
	output: {
		path: config.build.assetsRoot,
		filename: utils.assetsPath('js/[name].js'),
		chunkFilename: utils.assetsPath('js/[name].[chunkhash].min.js'),
		publicPath: config.build.assetsPath
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': env
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ["vendor"]
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new HtmlWebpackPlugin({
			filename: config.build.index,
			template: './src/index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			}
		})
	]
});