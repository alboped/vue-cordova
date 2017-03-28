import Vue from 'vue';
import VueRouter from 'vue-router';

import store from 'store/store';

import mainRouter from 'router/main.router';

/* 异步组件 */
const login = r => require.ensure([], () => r(require('pages/auth/login/login')), 'login'); // 登录
const retrieve_pwd = r => require.ensure([], () => r(require('pages/auth/pwd/retrievePwd')), 'retrieve_pwd'); // 找回密码

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/login'
	}, {
		path: '/login',
		component: login
	}, {
		path: '/retrieve_pwd',
		component: retrieve_pwd
	},
	...mainRouter
];

const router = new VueRouter({ routes });

/**
 * 添加页面加载loading效果
 */
router.beforeEach((to, from, next) => {
	store.commit('updateLoadingState', {
		isLoading: true
	})
	next();
});
router.afterEach(() => {
	setTimeout(() => {
		store.commit('updateLoadingState', {
			isLoading: false
		})
	}, 200)
});

export default router;
