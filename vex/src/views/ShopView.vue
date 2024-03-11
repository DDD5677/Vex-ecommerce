<template>
	<section class="shop">
		<PageHeader title="Shop" />
		<div class="container">
			<div class="row">
				<div v-for="product in productStore.products" :key="product.id" class="col-md-4">
					<Product :product="product" />
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

<style lang="scss" scoped></style>