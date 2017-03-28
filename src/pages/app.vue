<template>
	<div class="app">
		<router-view></router-view>
		<loading v-model="isLoading"></loading>
	</div>
</template>

<script>
	import { Loading } from 'vux';
	import { mapState } from 'vuex';

	export default {
		components: {
			Loading
		},
		computed: {
			...mapState({
				isLoading: state => state.pageLoading.isLoading
			})
		}
	}
</script>

<style>
	.app {
		width: 100%;
		height: 100%;
	}
</style>
