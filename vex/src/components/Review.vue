<template>
	<div class="review">
		<div class="img-box">
			<img src="@/assets/images/blog/avater-1.jpg" alt="">
		</div>
		<div class="content">
			<h5 class="name">JONATHON ANDREW</h5>
			<span class="date">July 02, 2015, at 11:34</span>
			<span class="reply"><i class="fa-solid fa-comments fa-flip-horizontal"></i> Reply</span>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend
				eleifend.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			</p>
			<slot></slot>
		</div>
	</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.review {
	display: flex;
	font-size: 12px;
	color: #7e7e7e;
	margin-top: 15px;

	.img-box {
		padding-right: 20px;

		img {
			width: 60px;
			height: 60px;
		}
	}

	.content {
		.name {
			font-size: 12px;
			color: #000;
		}

		.reply {
			margin-left: 5px;

			i {
				font-size: 10px;
			}
		}

		p {
			font-size: 14px;
			color: #757575;
			margin-bottom: 30px;
			margin-top: 5px;
		}
	}
}
</style>