<template>
	<button v-if="btn" class="btn btn-dark dark-btn">
		<slot></slot>
	</button>
	<router-link v-else to="/" class="btn btn-dark dark-btn">
		<slot></slot>
	</router-link>
</template>

<script setup>
const props = defineProps({
	btn: {
		type: Boolean,
		default: false
	}
})
</script>

<style lang="scss" scoped>
.dark-btn {
	padding: 14px 35px;
	color: white;
	border-radius: 0;
	text-transform: uppercase;
	font-size: 11px;
	letter-spacing: 1px;
	font-weight: 300;

	&:hover {
		opacity: 1;
		background-color: black;
	}
}
</style>