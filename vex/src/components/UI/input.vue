<template>
	<input class="main-input">

	</input>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.main-input {
	padding: 6px 12px;
	font-size: 18px;
	border: 1px solid #ccc;

	&::placeholder {
		font-size: 12px;
		font-weight: 300;
	}

	&:focus {
		border-color: black;
		border-radius: 0px;
		border-width: 1px;
	}
}
</style>