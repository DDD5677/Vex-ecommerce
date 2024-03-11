<template>
	<div class="icon">
		<slot></slot>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';
const props = defineProps({
	width: {
		type: Number,
		default: 18
	}
})
const size = computed(() => `${props.width}px`)
</script>

<style lang="scss" scoped>
.icon {
	margin: 5px;
	width: v-bind(size);
	height: v-bind(size);
	font-size: v-bind(size);
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>