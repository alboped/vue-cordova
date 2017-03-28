var path = require('path');

const assetsPath = [
	'',
	'http://172.16.40.34:8080/'
]

module.exports = {
	build: {
		env: {
			NODE_ENV: '"production"'
		},
		index: path.resolve(__dirname, '../www/index.html'),
		assetsRoot: path.resolve(__dirname, '../www'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/www/',
		assetsPath: assetsPath[1],
		vendor: [  // 需要独立打包的项目依赖库
			'vue', 
			'vuex', 
			'mint-ui', 
			'mint-ui/lib/style.css', 
			'fetch-jsonp', 
			'vue-validator', 
			'fastclick'
		]
	}, 
	dev: {
		env: {
			NODE_ENV: '"development"'
		},
		port: 8020,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/'
	}
}