<template>
	<div class="page-header">
		<div class="container">
			<h3 class="title">{{ props.title }}</h3>
			<div class="route">
				<router-link to="/">Home</router-link>
				<span>{{ route.name }}</span>
			</div>

		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const props = defineProps({
	title: {
		type: String,
		required: true
	}
})

const route = useRoute()
</script>

<style lang="scss" scoped>
.page-header {
	padding: 30px 15px;
	margin: 20px 0;
	background-color: #f7f7f7;

	.title {
		font-weight: 300;
		font-size: 36px;
		margin-bottom: 6px;
	}

	.route {
		font-weight: 300;
		font-size: 12px;

		span {
			color: #777777;

			&::before {
				content: '/';
				padding: 0 5px;
				color: #ccc;
			}
		}
	}
}
</style>