<template>
	<section class="checkout">
		<PageHeader title="Checkout" />
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<div class="billing">
						<div class="title">BILLING DETAILS</div>
						<div class="input-box">
							<label for="full-name">Full name</label>
							<MainInput id="full-name" type="text" />
						</div>
						<div class="input-box">
							<label for="full-name">Address</label>
							<MainInput id="full-name" type="text" />
						</div>
						<div class="zip-code d-flex justify-content-between gap-1">
							<div class="input-box">
								<label for="full-name">Zip code</label>
								<MainInput id="full-name" type="text" />
							</div>
							<div class="input-box">
								<label for="full-name">city</label>
								<MainInput id="full-name" type="text" />
							</div>
						</div>
						<div class="input-box">
							<label for="full-name">country</label>
							<MainInput id="full-name" type="text" />
						</div>
					</div>
					<div class="billing">
						<div class="title">PAYMENT METHOD</div>
						<p class="payment">Credit Cart Details (Secure payment)</p>
						<div class="input-box">
							<label for="full-name">CARD NUMBER *</label>
							<MainInput id="full-name" type="text" placeholder=".... .... .... ...." />
						</div>
						<div class="input-box">
							<label for="full-name">EXPIRY (MM/YY) *</label>
							<MainInput id="full-name" type="text" placeholder="MM / YY" />
						</div>
						<div class="input-box">
							<label for="full-name">CARD CODE *</label>
							<MainInput id="full-name" type="text" placeholder="CVC" />
						</div>
						<DarkButton>PLACE ORDER</DarkButton>
					</div>
				</div>
				<div class="col-md-4">
					<div class="order">
						<div class="title">ORDER SUMMARY</div>
						<div class="product-cart d-flex">
							<div class="img-box">
								<img src="@/assets/images/shop/cart/cart-1.jpg" alt="">
							</div>
							<div class="content">
								<div class="product-name"><a href="#">Ambassador Heritage 1921</a></div>
								<div class="product-price">1 x $249</div>
								<a href="#" class="remove">Remove</a>
							</div>
						</div>
						<div class="discount">
							<span>Have a discount ?</span> <a href="#">enter it here</a>
						</div>
						<ul class="summary-prices">
							<li class="subtotal">
								<span>Subtotal:</span><span>$190</span>
							</li>
							<li class="shipping">
								<span>Shipping:</span><span>Free</span>
							</li>
						</ul>
						<div class="summary-total">
							<span>Total:</span><span>$250</span>
						</div>
						<div class="verify-img">
							<img src="@/assets/images/shop/verified.png" alt="verified">
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue';


</script>

<style lang="scss" scoped>
.checkout {
	.container {
		padding-top: 70px;
		padding-bottom: 70px;
	}

	.title {
		font-size: 16px;
		text-transform: uppercase;
		padding-bottom: 15px;
		margin: 10px 0 15px;
		border-bottom: 1px solid #dedede;
	}

	.billing {
		padding: 15px;
		margin-bottom: 10px;


		.zip-code {
			div {
				flex-grow: 1;
			}
		}

		.input-box {
			position: relative;
			margin-bottom: 8px;

			label {
				position: absolute;
				font-size: 10px;
				color: #888;
				top: 35%;
				left: 15px;
				text-transform: uppercase;
			}

			.main-input {
				width: 100%;
				padding-left: 100px;
			}

		}
	}

	.order {
		padding: 15px;

		.product-cart {
			font-size: 14px;

			.img-box {
				padding-right: 20px;

				img {
					height: 100%;
					width: 80px;
				}
			}

			.content {
				.product-name {
					color: #000;
				}

				.product-price {
					margin: 15px 0 10px;
					color: #757575;
				}

				.remove {

					color: #333;

				}
			}
		}

		.discount {
			padding: 10px 0;
			margin: 20px 0 10px;
			border-top: 1px solid #dedede;
			border-bottom: 1px solid #dedede;

			span,
			a {
				font-size: 15px;
				color: #757575;
			}
		}

		.summary-prices {
			font-size: 14px;
			border-bottom: 1px solid #dedede;
			padding-bottom: 10px;

			li {
				padding: 5px 0;
				display: flex;
				justify-content: space-between;
			}
		}

		.summary-total {
			display: flex;
			justify-content: space-between;
			margin-top: 5px;
			font-size: 18px;
			font-weight: 500;
			color: #000;
		}

		.verify-img {
			margin-top: 25px;

			img {
				width: 100%;
			}
		}
	}

	.payment {
		font-size: 15px;
		margin-bottom: 10px;
		color: #757575;
	}

	.dark-btn {
		font-size: 11px;
		padding: 14px 35px;
		margin-top: 20px;
		font-weight: 200;
		letter-spacing: 1px;
	}
}
</style>