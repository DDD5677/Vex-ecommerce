<template>
	<section class="blog-left">
		<PageHeader title="Blog" />
		<div class="container">
			<div class="row">
				<div class="col-md-4 sidebar">
					<div class="top">
						<h4 class="title">GET NOTIFIED UPDATES</h4>
						<form action="">
							<MainInput type="email" placeholder="Your Email Address" required></MainInput>
							<DarkButton btn>I am in</DarkButton>
						</form>
					</div>
					<div class="posts">
						<h4 class="title">LATEST POSTS</h4>
						<div v-for="latestPost in postStore.latestPosts" :key="latestPost.id" class="latest-post">
							<div class="img-box">
								<img :src="getImageUrl(latestPost.img)" alt="">
							</div>
							<div class="content">
								<div class="post-title">{{ latestPost.title }}</div>
								<p>{{ latestPost.body }}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-8">
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

	.sidebar {
		.title {
			margin: 0;
			padding-bottom: 15px;
			font-size: 14px;
			font-weight: 400;
			text-transform: uppercase;
			letter-spacing: 2px;
		}

		.top {
			margin-bottom: 65px;

			form {
				display: flex;
				flex-direction: column;
				gap: 10px;

				.main-input {
					font-size: 12px;
					font-weight: 200;
					height: 45px;
				}
			}
		}

		.posts {
			.latest-post {
				margin-top: 15px;
				display: flex;
				gap: 10px;

				.img-box {
					img {
						width: 150px;
					}
				}

				.post-title {
					font-size: 14px;
					margin-bottom: 5px;
				}

				p {
					font-size: 12px;
					color: #757575;
				}
			}
		}
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