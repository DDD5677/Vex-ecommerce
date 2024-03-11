<template>
	<section class="product-detail">
		<div class="container">
			<div class="row mb-4 align-items-center">
				<div class="col-md-6 route">
					<router-link to="/">Home</router-link>
					<router-link :to="{ name: 'shop' }" class="link">Shop</router-link>
					<span class="link">Single Product</span>
				</div>
				<div class=" col-md-6 text-end btns">
					<router-link :to="{ name: 'productDetail' }" class="next">
						< Next</router-link>
							<router-link :to="{ name: 'productDetail' }" class="preview">Preview ></router-link>
				</div>
			</div>
			<div class="row mt-4">
				<div class="col-md-5">
					<swiper :style="{
						'--swiper-navigation-color': '#333',
						'--swiper-pagination-color': '#fff',
						'--swiper-navigation-sides-offset': '0',
					}" :loop="true" :spaceBetween="10" :autoplay="{ delay: 3500, disableOnInteraction: false }" :navigation="true"
						:thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="mySwiper2">
						<swiper-slide><img src="@/assets/images/shop/single-products/product-1.jpg" /></swiper-slide>
						<swiper-slide><img src="@/assets/images/shop/single-products/product-2.jpg" /></swiper-slide>
						<swiper-slide><img src="@/assets/images/shop/single-products/product-3.jpg" /></swiper-slide>
						<swiper-slide><img src="@/assets/images/shop/single-products/product-4.jpg" /></swiper-slide>
						<swiper-slide><img src="@/assets/images/shop/single-products/product-1.jpg" /></swiper-slide>
						<swiper-slide><img src="@/assets/images/shop/single-products/product-5.jpg" /></swiper-slide>
						<swiper-slide><img src="@/assets/images/shop/single-products/product-6.jpg" /></swiper-slide>
					</swiper>
					<swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="5" :slidesPerView="7" :freeMode="true"
						:watchSlidesProgress="true" :modules="modules" class="mySwiper">
						<swiper-slide><img src="@/assets/images/shop/single-products/product-1.jpg" /></swiper-slide>
						<swiper-slide><img src="@/assets/images/shop/single-products/product-2.jpg" /></swiper-slide>
						<swiper-slide><img src="@/assets/images/shop/single-products/product-3.jpg" /></swiper-slide>
						<swiper-slide><img src="@/assets/images/shop/single-products/product-4.jpg" /></swiper-slide>
						<swiper-slide><img src="@/assets/images/shop/single-products/product-1.jpg" /></swiper-slide>
						<swiper-slide><img src="@/assets/images/shop/single-products/product-5.jpg" /></swiper-slide>
						<swiper-slide><img src="@/assets/images/shop/single-products/product-6.jpg" /></swiper-slide>
					</swiper>

				</div>
				<div class="col-md-7">
					<div class="product">
						<h2 class="product-name">Eclipse Crossbody</h2>
						<span class="product-price">$300</span>
						<p class="product-dsc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum dicta
							quod, quia doloremque aut deserunt commodi quis. Totam a consequatur beatae nostrum, earum
							consequuntur? Eveniet consequatur ipsum dicta recusandae.
						</p>
						<p class="product-dsc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, velit, sunt
							temporibus, nulla accusamus similique sapiente tempora, at atque cumque assumenda minus asperiores
							est
							esse sequi dolore magnam. Debitis, explicabo.
						</p>
						<div class="product-item">
							<span class="subtitle">Color:</span>
							<div>
								<span class="color"></span>
								<span class="color"></span>
								<span class="color"></span>
							</div>
						</div>
						<div class="product-item">
							<span class="subtitle">Size:</span>
							<select class="form-select">
								<option selected>S</option>
								<option value="1">M</option>
								<option value="2">L</option>
								<option value="3">XL</option>
							</select>
						</div>
						<div class="product-item">
							<span class="subtitle">Quantity:</span>
							<div class="input-group">
								<button @click.prevent="decreament" class="btn " type="button">-</button>
								<input type="text" class="form-control" placeholder="" v-model="count">
								<button @click.prevent="increament" class="btn " type="button">+</button>
							</div>
						</div>
						<div class="product-item">
							<span class="subtitle">Categories:</span>
							<ul>
								<li>
									<a href="#">Products</a>
								</li>
								<li>
									<a href="#">Soap</a>
								</li>
							</ul>
						</div>
						<DarkButton>Add to cart</DarkButton>
					</div>
				</div>
			</div>
			<div class="row product-tab">
				<ul class="nav nav-pills" id="pills-tab" role="tablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
							type="button" role="tab" aria-controls="pills-home" aria-selected="true">Details</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
							type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Reviews (3)</button>
					</li>

				</ul>
				<div class="tab-content" id="pills-tabContent">
					<div class="details tab-pane fade show active" id="pills-home" role="tabpanel"
						aria-labelledby="pills-home-tab" tabindex="0">
						<div class="title">Product Description</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
							esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
							in culpa qui officia deserunt mollit anim id est laborum. Sed ut per spici
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis delectus quidem repudiandae
							veniam distinctio repellendus magni pariatur molestiae asperiores animi, eos quod iusto hic
							doloremque iste a, nisi iure at unde molestias enim fugit, nulla voluptatibus. Deserunt voluptate
							tempora aut illum harum, deleniti laborum animi neque, praesentium explicabo, debitis ipsa?
						</p>
					</div>
					<div class="tab-pane fade reviews" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
						tabindex="0">
						<Review v-for="i in 3"></Review>
					</div>
				</div>
			</div>
			<div class="row related-products">
				<h2 class="title">RELATED PRODUCTS</h2>
				<div v-for="product in productStore.relatedProducts" :key="product.id" class="col-md-3">
					<Product :product="product" />
				</div>
			</div>
		</div>


	</section>
</template>
<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useProductStore } from '@/stores/products';
import Product from '@/components/Product.vue';
import Review from '@/components/Review.vue';
const productStore = useProductStore()
const count = ref(0)
const increament = () => {
	count.value++
}
const decreament = () => {
	if (count.value > 0) count.value--
}


//swiper slider
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
	thumbsSwiper.value = swiper;
};
const modules = [FreeMode, Navigation, Thumbs, Autoplay]
</script>
<style scoped lang="scss">
.product-detail {
	padding: 60px 0 40px;

	.route {
		font-weight: 300;
		font-size: 14px;
		padding: 15px;

		.link {
			color: #777777;

			&::before {
				content: '/';
				padding: 0 5px;
				color: #ccc;
			}
		}
	}

	.btns {
		a {
			color: #777777;
			font-size: 14px;
		}

		.preview {

			&::before {
				content: '/';
				padding: 0 5px;
				color: #ccc;
			}
		}
	}

	.product {
		&-name {
			font-size: 30px;
			margin: 20px 0 10px;
		}

		&-price {
			color: #757575;
			font-size: 15px;
			display: inline-block;
			margin-bottom: 20px;
		}

		&-dsc {
			margin-bottom: 10px;
		}

		&-item {
			display: flex;
			align-items: center;
			margin-bottom: 20px;

			span {
				font-weight: 600;
				font-size: 13px;
				width: 100px;
			}

			.color {
				width: 36px;
				height: 36px;
				display: inline-block;
				margin-right: 5px;
				background-color: #000;
				cursor: pointer;

				&:first-child {
					background-color: #8da1cd;
				}

				&:last-child {
					background-color: #e6e2d6;
				}
			}

			select {
				width: 130px;
				border-radius: 0;
				border-color: #e5e5e5;
				font-size: 12px;

				&:focus {
					box-shadow: none;
				}
			}

			.input-group {
				width: 130px;

				input {
					border-top: 1px solid #adadad;
					border-bottom: 1px solid #adadad;
					font-size: 14px;
				}

				button {
					border: 1px solid #adadad;
					border-radius: 0;
					transition: all 0.3s ease-in;

					&:hover {
						background-color: #e6e6e6;
					}
				}
			}

			ul {
				margin-left: 20px;
				display: flex;

				a {
					font-size: 14px;
					color: #666;
					padding: 5px;

					&:hover {
						color: #000;
					}
				}
			}
		}
	}

	.product-tab {
		margin: 40px 0;

		ul {
			margin-bottom: 10px;
		}

		.nav-item {
			button {
				color: #000;
				border-radius: 0;
				font-size: 14px;

				&.active {
					background-color: #000;
					color: #fff;
				}
			}
		}
	}

	.tab-content {
		padding: 20px;
		border: 1px solid #dedede;

		.reviews {
			margin: 30px 0;
		}

		.details {
			color: #757575;
			font-size: 15px;

			.title {
				margin: 10px 0;
				font-size: 18px;
				color: #333;
			}
		}
	}



	.related-products {
		padding: 80px 0 40px;

		.title {
			font-weight: 400;
			margin: 40px 0;
			font-size: 18px;
			text-align: center;
			text-transform: uppercase;
			letter-spacing: 2px;
		}
	}

	//Swiper slider
	.swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;

		/* Center slide text vertically */
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}


	.swiper {
		width: 100%;
		height: 300px;
		margin-left: auto;
		margin-right: auto;
	}

	.swiper-slide {
		background-size: cover;
		background-position: center;
	}

	.mySwiper2 {


		height: 85%;
		width: 100%;
	}

	.mySwiper {
		height: 15%;
		box-sizing: border-box;
		padding: 10px 0;
	}

	.mySwiper .swiper-slide {
		width: 60px;
		height: 100%;
		opacity: 0.4;
	}

	.mySwiper .swiper-slide-thumb-active {
		opacity: 1;
	}

	.swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
}
</style>