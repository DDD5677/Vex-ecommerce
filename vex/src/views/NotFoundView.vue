<template>
	<section class="not-found">
		<div class="container">
			<div class="row text-center align-items-center">
				<div class="col-12 h-100">
					<brand />
					<h1>404</h1>
					<h2>Page Not Found</h2>
					<DarkButton to="/shop">Go to Home</DarkButton>
					<p>© 2024 Djumakulov. D. All Rights Reserved</p>

				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style lang="scss" scoped>
.not-found {
	.row {
		min-height: 100vh;

		.brand {
			width: 150px;
		}

		h1 {
			font-size: 300px;
			font-weight: 700;
			line-height: 300px;
			margin-top: 30px;
		}

		h2 {
			text-transform: uppercase;
			font-size: 20px;
			letter-spacing: 4px;
			font-weight: bold;
			margin-top: 30px;
		}

		.dark-btn {
			margin-top: 40px;
		}

		p {
			margin-top: 50px;
			font-size: 12px;
			color: #757575;
		}
	}
}
</style>