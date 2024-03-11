<template>
	<section class="blog-left">
		<PageHeader title="Blog" />
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<Post v-for="post in postStore.posts" :key="post.id" :post="post" />
					<div class="post-pagination">
						<nav aria-label="Page navigation example">
							<ul class="pagination">
								<li class="page-item"><a class="page-link " href="#">Prev</a></li>
								<li class="page-item"><a class="page-link active" href="#">1</a></li>
								<li class="page-item"><a class="page-link" href="#">2</a></li>
								<li class="page-item"><a class="page-link" href="#">3</a></li>
								<li class="page-item"><a class="page-link" href="#">4</a></li>
								<li class="page-item"><a class="page-link" href="#">5</a></li>
								<li class="page-item"><a class="page-link" href="#">Next</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue';
import Post from '@/components/Post.vue';
import { usePostStore } from '@/stores/posts';
const postStore = usePostStore()
const getImageUrl = (name) => {
	return new URL(`../assets/images/blog/${name}`, import.meta.url).href
}
</script>

<style lang="scss" scoped>
.blog-left {
	.row {

		padding: 70px 0;
	}


	.post-pagination {
		display: flex;
		justify-content: center;

		.pagination {
			margin: 70px 0 20px;
			gap: 10px;

			.page-link {
				color: #000;
				padding: 6px 12px;
				font-size: 12px;
				border-radius: 0;

				&.active,
				&:hover {
					background-color: #000;
					color: #fff;
					border-color: #000;
				}
			}
		}
	}
}
</style>