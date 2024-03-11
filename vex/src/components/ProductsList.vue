<template>
	<section class="products-list">
		<div class="container">
			<div class="row">
				<h4 class="title">
					TRENDY PRODUCTS
				</h4>
				<div v-for="product in productStore.products" :key="product.id" class="col-md-4">
					<Product :product="product" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import Product from '@/components/Product.vue';
import { useProductStore } from '@/stores/products';

const productStore = useProductStore()

</script>

<style lang="scss" scoped>
.products-list {
	padding: 100px 0 80px;
	background-color: #f9f9f9;

	.title {
		text-align: center;
		padding-bottom: 30px;
		font-size: 18px;
		letter-spacing: 2px;
	}
}
</style>