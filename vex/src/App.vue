<template>
	<component :is="layout">
		<RouterView class="routerView" />
	</component>
</template>


<script lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue"
import { RouterView } from 'vue-router'
import { computed, defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
	components: {
		MainLayout,
		EmptyLayout,
	},
	setup() {
		const route = useRoute()
		const layout = computed(() => {
			return route.meta.layout ? route.meta.layout + 'Layout' : 'MainLayout'
		})

		return {
			layout
		}
	}
})
</script>
<style lang="scss">
.routerView {
	flex-grow: 1;

	.mySwiper2 {

		.swiper-button-next,
		.swiper-button-prev {
			background-color: #fff;
			padding: 30px 14px;
			top: 50%;
			opacity: 0.6;

			&::after {
				font-size: 25px;
			}

			&:hover {
				opacity: 1;
			}
		}
	}
}
</style>
