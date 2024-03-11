<template>
	<section class="subscribe">
		<div class="container d-flex justify-content-center">
			<div class="text-center w-50">
				<div class="content">
					<h4 class="title">SUBSCRIBE TO NEWSLETTER</h4>
					<p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
						facilis numquam impedit ut sequi. Minus facilis vitae excepturi sit laboriosam.
					</p>
				</div>
				<form class="input-group mb-3 justify-content-center">
					<MainInput type="email" required placeholder="Enter Your Email Address"></MainInput>
					<DarkButton>Button</DarkButton>
				</form>
			</div>
		</div>
	</section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.subscribe {
	padding: 100px 0 80px;
	background-color: #f9f9f9;

	.content {
		padding: 20px 0 30px;
	}

	.title {
		letter-spacing: 2px;
		font-size: 18px;
	}

	.text {
		font-size: 15px;
		color: #757575;

	}

	.input-group {
		.main-input {
			width: 400px;
		}
	}
}
</style>