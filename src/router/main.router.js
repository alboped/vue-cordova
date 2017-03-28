import store from 'store/store';

const main = r => require.ensure([], () => r(require('pages/main/main')), 'main'); // 主界面模块
const home = r => require.ensure([], () => r(require('pages/home/home')), 'home'); // 首页
const merchant = r => require.ensure([], () => r(require('pages/merchant/merchant')), 'merchant'); // 商户模块
const ally = r => require.ensure([], () => r(require('pages/ally/ally')), 'ally'); // 盟友模块
const account = r => require.ensure([], () => r(require('pages/account/account')), 'account'); // "我的"模块

/**
 * 修改首页导航选中状态
 */
const beforeEnter = index => ({
	beforeEnter: (to, from, next) => {
		store.commit('setTabBarSelected', index);
		next();
	}
});

export default [
    {
		path: '/main',
		component: main,
		children: [
			{
				path: '/',
				redirect: 'home'
			}, {
				path: 'home',
				component: home,
				...beforeEnter('1')
			}, {
				path: 'merchant',
				component: merchant,
				...beforeEnter('2')
			}, {
				path: 'ally',
				component: ally,
				...beforeEnter('3')
			}, {
				path: 'account',
				component: account,
				...beforeEnter('4')
			}
		]
	}
]
