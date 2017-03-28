import Vue from 'vue';
import Vuex from 'vuex';

import { getActivityList } from 'service/fetch/common';

import loginStore from 'store/auth/login-store';
import regStore from 'store/auth/reg-store';

Vue.use(Vuex);

/**
 * vux页面切换状态
 */
const pageLoading = {
	state: {
		isLoading: false
	},
	mutations: {
		updateLoadingState (state, payload) {
			state.isLoading = payload.isLoading
		}
	}
}

export default new Vuex.Store({
	state: {
		tabBarSelected: 1,
		carouselImgList: []
	},
	mutations: {
		setCarouselImg(state, data) {
			state.carouselImgList = data;
		},
		setTabBarSelected(state, data) {
			console.log(data);
			state.tabBarSelected = data;
		}
	},
	actions: {
		getCarouselImg({ commit }) {
			getActivityList().then(data => {
				commit('setCarouselImg', data.retValue);
			})
		}
	},
	modules: {
		loginStore,
		regStore,
		pageLoading
	}
});
