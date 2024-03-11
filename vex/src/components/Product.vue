<template>
	<div class="product">
		<div class="img-box">
			<img :src="getImageUrl(props.product.img)" alt="">
			<DarkButton v-if="props.product.sale" class="sale">Sale</DarkButton>
			<div class="btns">
				<a type="button" data-bs-toggle="modal" :data-bs-target="`#exampleModalProduct${product.id + 3}`">
					<Icon :width="25">
						<MagnifyingGlassIcon />
					</Icon>
				</a>
				<RouterLink to="/">
					<Icon :width="25">
						<HeartIcon />
					</Icon>
				</RouterLink>
				<RouterLink to="/">
					<Icon :width="25">
						<ShoppingCartIcon />
					</Icon>
				</RouterLink>
			</div>
		</div>
		<div class="content">
			<div class="name">
				{{ props.product.name }}
			</div>
			<div class="price">
				${{ props.product.price }}
			</div>
		</div>
		<!-- Button trigger modal -->
		<!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalProduct">
			Launch demo modal
		</button> -->

		<!-- Modal -->
		<div class="modal fade" :id="`exampleModalProduct${product.id + 3}`" tabindex="-1"
			aria-labelledby="exampleModalLabel" aria-hidden="true">
			<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><i
					class="fa-solid fa-xmark"></i></button>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-body">
						<div class="left">
							<img :src="getImageUrl(props.product.img)" :alt="props.product.img">

						</div>
						<div class="right">
							<h2 class="modal-title">{{ props.product.name }}</h2>
							<div class="modal-price">${{ props.product.price }}</div>
							<p class="modal-dsc">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iusto nihil cum. Illo laborum
								numquam rem aut officia dicta cumque.
							</p>
							<div class="modal-btn">
								<DarkButton @click="goToCart" data-bs-dismiss="modal" aria-label="Close">Add To Cart
								</DarkButton>

							</div>
							<a @click="goToProduct" type="button" class="link" data-bs-dismiss="modal" aria-label="Close">View
								product detail</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/vue/24/solid';
import { computed, defineProps } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps({
	product: {
		type: Object,
		required: true
	}
})
const getImageUrl = (name) => {
	return new URL(`../assets/images/shop/products/${name}`, import.meta.url).href
}
const goToProduct = () => {
	router.push('/shop/product')
	window.scrollTo(0, 0);
}
const goToCart = () => {
	router.push('/cart')
	window.scrollTo(0, 0);
}
</script>

<style lang="scss" scoped>
.product {
	padding: 0 3px;
	margin-bottom: 30px;

	.sale {
		position: absolute;
		right: 12px;
		top: 12px;
		font-size: 12px;
		padding: 4px 12px;
	}

	.img-box {
		position: relative;


		img {
			width: 100%;
			transition: all 0.3s ease;
		}

		&:hover {
			img {
				filter: brightness(50%);
			}

			.btns {
				transform: translateY(-20px);
				opacity: 1;
			}
		}

		.btns {
			width: 100%;
			display: flex;
			justify-content: center;
			transition: all 0.3s ease-in;
			opacity: 0;
			position: absolute;
			left: 0;
			bottom: 10px;

			a {
				margin: 0 3px;
				padding: 10px;
				transition: all 0.3s ease;
				background-color: white;
				outline: none;

				.icon {
					margin: 0;
				}

				&:active {
					outline: none;
				}

				&:hover {
					color: white;
					background-color: black;
				}
			}
		}
	}


	.content {
		text-align: center;

		.name {
			font-size: 16px;
			margin: 15px 0 6px;
		}

		.price {
			font-size: 15px;
			color: #757575;
			margin-bottom: 10px;
		}
	}

	.modal {
		background-color: rgba($color: #fff, $alpha: 0.9);

		.close {
			position: absolute;
			right: 20px;
			top: 10px;
			width: 50px;
			font-weight: bold;
			font-size: 35px;
			border: none;

			color: #ccc;

			&:hover {
				color: #757575;

			}
		}

		.modal-dialog {
			max-width: 800px;
			margin-top: 150px;

			.modal-content {
				border: none;
				border-radius: 0;
			}
		}

		.modal-body {
			display: flex;
			padding: 30px;
			gap: 30px;

			.left {
				img {
					width: 350px;
				}
			}

			.right {
				flex-grow: 1;

				.modal-title {
					font-size: 22px;
					margin-bottom: 10px;
				}

				.modal-price {
					margin: 20px 0;
					font-size: 30px;
					color: #757575;
				}

				.modal-dsc {
					margin: 20px 0;
					font-size: 15px;
					color: #757575;
				}

				.modal-btn {
					margin: 20px 0;
				}

				a.link {
					font-size: 11px;
					text-transform: uppercase;
					color: #444;
					border-bottom: 1px solid #dedede;
					display: inline-block;
					letter-spacing: 1px;
					font-weight: 300;
				}
			}
		}
	}
}
</style>