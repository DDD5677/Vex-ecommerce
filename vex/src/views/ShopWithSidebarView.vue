<template>
	<section class="shop-with-sidebar">
		<PageHeader title="Shop" />
		<div class="container">
			<div class="row main">
				<div class="col-md-3">
					<div class="menu">
						<div class="top">
							<h4 class="title">SHORT BY</h4>
							<select class="form-select">
								<option selected>Man</option>
								<option value="1">Women</option>
								<option value="2">Accessories</option>
								<option value="3">Shoes</option>
							</select>
						</div>
						<div class="bottom">
							<h4 class="title">SHORT BY</h4>
							<div class="fall-menu">
								<a class="btn" data-bs-toggle="collapse" href="#collapseExample0" role="button"
									aria-expanded="false" aria-controls="collapseExample0">
									Shoes
									<span class="plus"><i class="fa-solid fa-plus"></i></span>
									<span class="minus"><i class="fa-solid fa-minus"></i></span>
								</a>
								<div class="collapse" id="collapseExample0">
									<div class="card card-body">
										<ul>
											<li><a href="#">Brand & Twist</a></li>
											<li><a href="#">Shoe Color</a></li>
											<li><a href="#">Shoe Color</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="fall-menu">
								<a class="btn" data-bs-toggle="collapse" href="#collapseExample1" role="button"
									aria-expanded="false" aria-controls="collapseExample1">
									Duty Wear
									<span class="plus"><i class="fa-solid fa-plus"></i></span>
									<span class="minus"><i class="fa-solid fa-minus"></i></span>
								</a>
								<div class="collapse" id="collapseExample1">
									<div class="card card-body">
										<ul>
											<li><a href="#">Brand & Twist</a></li>
											<li><a href="#">Shoe Color</a></li>
											<li><a href="#">Shoe Color</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="fall-menu">
								<a class="btn" data-bs-toggle="collapse" href="#collapseExample2" role="button"
									aria-expanded="false" aria-controls="collapseExample2">
									Workout Shoes
									<span class="plus"><i class="fa-solid fa-plus"></i></span>
									<span class="minus"><i class="fa-solid fa-minus"></i></span>
								</a>
								<div class="collapse" id="collapseExample2">
									<div class="card card-body">
										<ul>
											<li><a href="#">Brand & Twist</a></li>
											<li><a href="#">Shoe Color</a></li>
											<li><a href="#">Gladian Shoes</a></li>
											<li><a href="#">Swis Shoes</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-9">
					<div class="row">
						<div v-for="product in productStore.products" :key="product.id" class="col-md-4">
							<Product :product="product" />
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import Product from '@/components/Product.vue';
import PageHeader from '@/components/PageHeader.vue';
import { useProductStore } from '@/stores/products';
const productStore = useProductStore()
</script>

<style lang="scss" scoped>
.shop-with-sidebar {
	.main {
		padding: 80px 0;

	}

	.menu {

		.title {
			font-size: 14px;
			padding-bottom: 15px;
			font-weight: 400;
			letter-spacing: 2px;
			text-transform: uppercase;
			margin: 0;
		}

		.top {
			margin-bottom: 65px;

			select {
				width: 100%;
				border-radius: 0;
				border-color: #e5e5e5;
				font-size: 14px;
				padding: 6px 12px;

				&:focus {
					box-shadow: none;
				}
			}
		}

		.bottom {
			margin-bottom: 65px;

			.fall-menu {
				margin-bottom: 5px;

				.btn {
					line-height: 1;
					color: #333;
					border: 1px solid #e5e5e5;
					border-radius: 0;
					width: 100%;
					text-align: start;
					font-size: 14px;
					padding: 10px;
					text-transform: uppercase;
					display: flex;
					justify-content: space-between;

					&:hover {
						color: #000;
					}

					&[aria-expanded="false"] {
						.plus {
							display: inline-block;
						}

						.minus {
							display: none;
						}
					}

					&[aria-expanded="true"] {
						.plus {
							display: none;
						}

						.minus {
							display: inline-block;
						}
					}
				}

				.card {
					border-radius: 0;

					ul {
						padding-left: 15px;

						a {
							font-size: 14px;
							color: #666;

							&:hover {
								color: #000;
							}
						}
					}
				}

			}
		}
	}
}
</style>