<template>
	<div class="main-container">
		<router-view class="flex"></router-view>
		<tabbar icon-class="main-nav-icon">
			<tabbar-item link="home" :selected="tabBarSelected == 1">
				<i slot="icon" class="icon-default"><x-icon type="ios-home-outline"></x-icon></i>
				<i slot="icon-active" class="icon-active"><x-icon type="ios-home"></x-icon></i>
				<span slot="label" class="main-nav-label">首页</span>
			</tabbar-item>
			<tabbar-item link="merchant" :selected="tabBarSelected == 2">
				<i slot="icon" class="icon-default"><x-icon type="ios-bookmarks-outline"></x-icon></i>
				<i slot="icon-active" class="icon-active"><x-icon type="ios-bookmarks"></x-icon></i>
				<span slot="label" class="main-nav-label">商户</span>
			</tabbar-item>
			<tabbar-item link="ally" :selected="tabBarSelected == 3">
				<i slot="icon" class="icon-default"><x-icon type="ios-people-outline"></x-icon></i>
				<i slot="icon-active" class="icon-active"><x-icon type="ios-people"></x-icon></i>
				<span slot="label" class="main-nav-label">盟友</span>
			</tabbar-item>
			<tabbar-item link="account" :selected="tabBarSelected == 4">
				<i slot="icon" class="icon-default"><x-icon type="ios-person-outline"></x-icon></i>
				<i slot="icon-active" class="icon-active"><x-icon type="ios-person"></x-icon></i>
				<span slot="label" class="main-nav-label">我的</span>
			</tabbar-item>
		</tabbar>
	</div>
</template>

<style>
	.main-container {
		width: 100%;
		height: 100%;
	}
	.icon-default svg {
		fill: #888;
	}
	.main-container .main-nav-icon {
	    height: 24px;
	}
	.icon-active svg {
		fill: #387ef5;
	}
	.main-nav-label {
		font-size: 10px;
	}
</style>

<script>
	import Vue from 'vue';
	import { mapState } from 'vuex';

	import { Tabbar, TabbarItem } from 'vux';

	import { getActivityList } from 'service/fetch/common';

	export default {
		components: {
			Tabbar,
			TabbarItem
		},
		computed: {
			...mapState({
				tabBarSelected: state => state.tabBarSelected
			})
		},
		methods: {
			routerLoad(router) {
				console.log(router);
			}
		},
		created() {
			/* 查询轮播图列表 */
			this.$store.dispatch('getCarouselImg');
		}
	}
</script>
