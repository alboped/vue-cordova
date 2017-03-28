var path = require('path');
var config = require('../config');
var utils = require('./utils');
var projectRoot = path.resolve(__dirname, '../src');

var vuxLoader = require('vux-loader');
var vuxConfig = require('./vux.conf');

var env = process.env.NODE_ENV;

var webpackBaseConfig = {
	entry: {
		app: [
			'./src/main.js'
		]
	},
	output: {
		path: config.build.assetsRoot,
		publicPath: env === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: projectRoot
			}, {
				test: /\.vue$/,
				loader: 'vue-loader'
			}, {
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}, {
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}, {
				test: /\.json$/,
				loader: 'json-loader'
			}, {
				test: /\.(png|jpe?g|gif|svg)$/,
				loader: 'url-loader?limit=10000&name=images/[name].[ext]'
			}, {
				test: /\.(woff?2|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader?limit=10000&fonts/[name].[hash:7].[ext]'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.vue', '.css', '.scss'],
		alias: {
			'vue': 'vue/dist/vue.js',
			'pages': path.resolve(__dirname, '../src/pages'),
			'components': path.resolve(__dirname, '../src/components'),
			'store': path.resolve(__dirname, '../src/store'),
			'service': path.resolve(__dirname, '../src/service'),
			'style': path.resolve(__dirname, '../src/style'),
			'images': path.resolve(__dirname, '../src/images'),
			'router': path.resolve(__dirname, '../src/router'),
			'config': path.resolve(__dirname, '../src/config')
		}
	}
}

module.exports = vuxLoader.merge(webpackBaseConfig, vuxConfig);