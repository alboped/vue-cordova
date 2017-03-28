<template>
	<div class="account">
		<mt-button class="margin-8p" type="danger" size="large" @click.native="outlogin">退出登录</mt-button>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Button } from 'mint-ui';

	Vue.component(Button.name, Button);

	export default {
		methods: {
			outlogin() {
				this.$router.push('/login');
			}
		}
	}
</script>

<style>

</style>
