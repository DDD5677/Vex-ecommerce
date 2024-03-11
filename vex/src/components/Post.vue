<template>
	<div class="post">
		<div class="img-box">
			<img :src="getImageUrl(props.post.img)" alt="">
		</div>
		<div class="post-body">
			<h4 class="post-title">{{ props.post.title }}</h4>
			<ul class="post-info">
				<li><i class="fa-solid fa-calendar"></i> 20, MAR 2017</li>
				<li><i class="fa-solid fa-user"></i> POSTED BY ADMIN</li>
				<li><i class="fa-solid fa-tag fa-flip-horizontal"></i><a href="#">LIFESTYLE</a>,<a href="#">TRAVEL</a>,<a
						href="#">FASHION</a></li>
				<li><i class="fa-solid fa-comments fa-flip-horizontal"></i><span>4</span> <a href="#">COMMENTS</a></li>
			</ul>
			<p class="post-text">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum
				asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam
				fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus
				sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Quod, facere.
			</p>
			<DarkButton :to="{ name: 'blog single' }">Continue reading</DarkButton>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	post: {
		type: Object,
		required: true
	}
})
const getImageUrl = (name) => {
	return new URL(`../assets/images/blog/${name}`, import.meta.url).href
}
</script>

<style lang="scss" scoped>
.post {
	background: #fff;
	margin-bottom: 40px;
	padding-bottom: 20px;
	border-bottom: 1px solid #dedede;

	.img-box {
		img {
			width: 100%;
		}
	}

	.post-body {
		padding-left: 20px;
		margin-top: 20px;

		.post-title {
			font-size: 20px;
			font-weight: 300;
		}

		.post-info {
			margin: 5px 0;
			font-size: 12px;
			text-transform: uppercase;
			display: flex;
			flex-wrap: wrap;
			row-gap: 5px;
			column-gap: 15px;
			color: #5f5b5b;
			font-weight: 300;

			i {
				margin-right: 5px;
			}

			a {
				margin-left: 5px;
			}
		}

		p {
			font-size: 14px;
			margin: 10px 0;
		}

		.dark-btn {
			margin: 15px 0;
			padding: 10px 20px;
			font-size: 10px;
		}
	}
}
</style>