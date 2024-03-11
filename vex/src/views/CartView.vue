<template>
	<section class="cart-page">
		<PageHeader title="Cart" />
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<table>
						<thead>
							<th>Item Name</th>
							<th>Item Price</th>
							<th>Actions</th>
						</thead>
						<tbody>
							<tr v-for="cart in productStore.carts" :key="cart.id">
								<td>
									<div class="product">
										<img :src="getImageUrl(cart.img)" alt="">
										<a href="#">{{ cart.name }}</a>
									</div>
								</td>
								<td><span>${{ cart.price }}</span></td>
								<td><a class="remove" href="#">Remove</a></td>
							</tr>
						</tbody>
					</table>
					<div class="btns">
						<DarkButton>CHECKOUT</DarkButton>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue';
import { useProductStore } from '@/stores/products';
const productStore = useProductStore()
const getImageUrl = (name) => {
	return new URL(`../assets/images/shop/cart/${name}`, import.meta.url).href
}
</script>

<style lang="scss" scoped>
.cart-page {
	.row {
		justify-content: center;
		padding: 70px 0;
	}

	table {
		width: 100%;
		font-size: 14px;

		td,
		th {
			padding: 8px;
		}

		thead {
			th {
				border-bottom: 2px solid #ddd;
			}

		}

		tbody {
			tr {
				border-top: 1px solid #ddd;
			}

			.product {
				img {
					width: 80px;
				}

				a {
					margin-left: 10px;
					font-weight: 600;
				}
			}

			.remove {
				color: #c7254e;
			}
		}
	}

	.btns {
		display: flex;
		justify-content: flex-end;
		margin-top: 15px;
	}
}
</style>