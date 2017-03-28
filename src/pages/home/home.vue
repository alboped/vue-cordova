<template>
	<div class="home">
		<div class="home-carousel-box">
			<mt-swipe class="fill-box home-carousel" :auto="5000">
				<mt-swipe-item v-for="item in carouselImgList">
					<img class="carousel-img" v-img-src="item.imageUrl"></img>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="home-nav">

		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem } from 'mint-ui';

	import { getActivityList } from 'service/fetch/common';

	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);

	export default {
		computed: {
			carouselImgList() {
				return this.$store.state.carouselImgList;
			}
		}
	}
</script>

<style>
	.home-carousel-box {
		position: relative;
		width: 100%;
		height: 0;
		padding-top: 61.17%;
	}
	.home-carousel {
		position: absolute;
		top: 0;
		left: 0;
	}
	.carousel-img {
		width: 100%;
		height: auto;
	}
</style>
