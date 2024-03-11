<template>
	<router-link to="/" class="btn light-btn">
		<slot></slot>
	</router-link>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.light-btn {
	padding: 14px 35px;
	color: white;
	border-radius: 0;
	text-transform: uppercase;
	font-size: 11px;
	letter-spacing: 1px;

	&:hover {
		opacity: 1;
		background-color: black;
	}
}
</style>