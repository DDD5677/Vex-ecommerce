<template>
	<section class="category">
		<div class="container">
			<div class="row">
				<h4 class="title">PRODUCT CATEGORY</h4>
				<div class="col-md-6">
					<div class="card position-relative mb-5">
						<RouterLink to="/">
							<img src="@/assets/images/shop/category/category-1.jpg" alt="">
							<div class="content position-absolute top-0 p-4">
								<span class="category-name d-block ">Clothes Sales</span>
								<span class="category-dsc">Shop New Season Clothing</span>
							</div>
						</RouterLink>
					</div>
					<div class="card position-relative">
						<RouterLink to="/">
							<img src="@/assets/images/shop/category/category-2.jpg" alt="">
							<div class="content position-absolute top-0 p-4">
								<span class="category-name d-block ">Smart Casuals</span>
								<span class="category-dsc">Get Wide Range Selection</span>
							</div>
						</RouterLink>
					</div>
				</div>
				<div class="col-md-6">
					<div class="card position-relative h-100">
						<RouterLink to="/" class="h-100">
							<img src="@/assets/images/shop/category/category-3.jpg" alt="">
							<div class="content position-absolute top-0 p-4">
								<span class="category-name d-block ">Smart Casuals</span>
								<span class="category-dsc">Get Wide Range Selection</span>
							</div>
						</RouterLink>
					</div>
				</div>
			</div>
		</div>

	</section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.category {
	padding: 100px 0 80px;

	.title {
		text-align: center;
		padding-bottom: 30px;
		font-size: 18px;
		letter-spacing: 2px;
	}

	.card {
		overflow: hidden;

		img {
			height: 100%;
			width: 100%;
			transition: all 0.3s ease-in;

			&:hover {
				transform: scale(1.05);
			}
		}

		.category-name {
			font-size: 20px;
			font-weight: 500;
		}

		.category-dsc {
			font-size: 15px;
		}
	}
}
</style>