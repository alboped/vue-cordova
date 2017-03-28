import Vue from 'vue';
import FastClick from 'fastclick';
import VueValidator from 'vue-validator';

import 'mint-ui/lib/style.css';

import App from 'pages/app';

import router from 'router/router';

import store from 'store/store';

import 'style/main';

import Plugins from 'components/plugins/img-load';

import { LoadingPlugin } from 'vux';

// 添加fastclick 支持
FastClick.attach(document.body);

Vue.use(LoadingPlugin);
Vue.use(VueValidator);

const protocol = window.location.protocol === 'file:';
// 判断是否加载cordova.js文件。
if (protocol) {
	let cordovaScript = document.createElement('script');
	cordovaScript.setAttribute('src', 'cordova.js');
	document.body.appendChild(cordovaScript);
}

new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	},
	router,
	store,
	created: function(){
		protocol && this.$router.push('/login');
	}
});
