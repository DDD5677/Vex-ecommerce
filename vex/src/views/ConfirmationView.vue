<template>
	<section class="confirmation">
		<div class="container">
			<div class="row d-flex justify-content-center text-center">
				<div class="col-md-6">
					<span class="icon">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
							stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round"
								d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
						</svg>

					</span>
					<h4 class="title">Thank you! For your payment</h4>
					<p class="subtitle">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, sed.
					</p>
					<DarkButton>Continue shopping</DarkButton>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.row {
	padding: 70px 0;

	.icon {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		color: white;
		font-weight: 700;
		background-color: #1bbb1b;
		width: 60px;
		height: 60px;
		border-radius: 50%;

		svg {
			width: 45px;
		}
	}

	.title {
		margin: 20px 0 10px;
		font-size: 30px;
	}

	.subtitle {
		color: #757575;
		font-size: 15px;
	}

	.dark-btn {
		margin-top: 15px;
	}
}
</style>