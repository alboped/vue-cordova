<template>
	<form class="login-form" @submit.prevent="loginSubmit">
		<group class="login-input" label-align="center">
			<x-input placeholder="账号" v-model="username" minlangth="6" maxlength="16">
				<span slot="right"></span>
			</x-input>
			<x-input placeholder="密码" v-model="password" minlangth="6" maxlength="16" type="password"></x-input>
		</group>
		<div class="button-box center">
			<x-button type="primary">登录</x-button>
			<a @click.privent="showTool = true" class="link login-tool-link">遇到问题？</a>
			<x-button plain type="primary" @click.native.prevent="reg">没有账号？请注册</x-button>
		</div>
		<actionsheet class="actionsheet-transparent" v-model="showTool" :menus="toolList" show-cancel
			@on-click-menu-0="retrievePwd"
			@on-click-menu-1="otherissue">
		</actionsheet>
	</form>
</template>

<script>
	import Vue from 'vue';
	import { Group, XInput, XButton, Actionsheet, Popup } from 'vux';

	import ImgLoader from 'components/plugins/img-loader';

	import { userLogin } from 'service/fetch/auth';

	export default {
		components: {
			Group,
			XInput,
			XButton,
			Popup,
			Actionsheet
		},
		data() {
			return {
				username: '',
				password: '',
				showTool: false,
				toolList: [
					'找回密码',
					'其他问题'
				]
			}
		},
		methods: {
			loginSubmit() {
				this.$router.push('/main');return;
				this.$vux.loading.show({
					text: '登录中...'
				});
				userLogin(this.username, this.password).then(data => {
					this.$vux.loading.hide();
					this.$router.push('/main');
				}).catch(error => {
					this.$vux.loading.hide();
				});
			},
			reg() {

			},
			retrievePwd() {
				this.$router.push('/retrieve_pwd');
			},
			otherissue() {
				console.log('issue');
			}
		}
	}
</script>

<style>
	.login-logo {
		width: 104px;
		margin-bottom: 10px;
	}
	.login-form {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.login-input {
		width: 100%;
		margin-bottom: 20px;
	}
	.login-tool-link {
		line-height: 50px;
	}
</style>
