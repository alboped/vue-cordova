var path = require('path');
var express = require('express');
var webpack = require('webpack');
var opn = require('opn');

var config = require('../config');
var webpackConfig = require('./webpack.dev.conf');

if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);

var port = config.dev.port;

var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
	onInfo: true,
	publicPath: webpackConfig.output.publicPath,
	stats: {
		colors: true
	}
});

var hotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(devMiddleware);
app.use(hotMiddleware);

module.exports = app.listen(port, function(err){
	if (err) {
		console.log(err);
		return;
	}

	var uri = 'http://localhost:' + port;
	console.log('🐳  Listening at 🍭  ' + uri + ' 🏘');
	opn(uri);
});