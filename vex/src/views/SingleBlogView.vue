<template>
	<section class="single-blog">
		<PageHeaderVue title="Blog" />
		<div class="container main">

			<div class="post">
				<div class="img-box">
					<img :src="getImageUrl(post.img)" alt="">
				</div>
				<div class="post-body">
					<h4 class="post-title">{{ post.title }}</h4>
					<ul class="post-info">
						<li><i class="fa-solid fa-calendar"></i> 20, MAR 2017</li>
						<li><i class="fa-solid fa-user"></i> POSTED BY ADMIN</li>
						<li><i class="fa-solid fa-tag fa-flip-horizontal"></i><a href="#">LIFESTYLE</a>,<a
								href="#">TRAVEL</a>,<a href="#">FASHION</a></li>
						<li><i class="fa-solid fa-comments fa-flip-horizontal"></i><span>4</span> <a href="#">COMMENTS</a>
						</li>
					</ul>
					<div class="post-text">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum
							asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque
							veniam
							fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque
							accusamus
							sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur
							adipisicing
							elit.
							Quod, facere.
						</p>
						<div class="quote">
							<p>
								Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis
								fugats vitaes nemo minima rerums unsers sadips amets.. Sed ut perspiciatis unde omnis iste natus
								error
							</p>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum illo deserunt necessitatibus
							quibusdam sint, eos explicabo tenetur molestiae vero facere, aspernatur sit mollitia perferendis
							reiciendis. Deleniti magni explicabo sed alias fugit amet animi molestias ipsum maiores.
							Praesentium sint, id laborum quos. Tempora inventore est, dolor corporis quis doloremque nostrum,
							eos velit culpa quasi labore. Provident laborum porro nihil iste, magnam officia nemo praesentium
							autem, libero vel officiis. Omnis pariatur nam voluptatem voluptate at officia repellat ea beatae
							eligendi? Mollitia error saepe, aperiam facere. Optio maiores deleniti veritatis eaque commodi
							atque aperiam, debitis iste alias eligendi ut facilis earum! Impedit, tempore.
						</p>
						<pre>
.blog-classic {
							margin-bottom: 70px;
							padding-bottom: 70px;
							border-bottom: 1px solid #efefef;
						}
						</pre>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex error esse a dolore, architecto
							sapiente, aliquid commodi, laudantium eius nemo enim. Enim, fugit voluptatem rem molestiae. Sed
							totam quis accusantium iste nesciunt id exercitationem cumque repudiandae voluptas perspiciatis,
							consequatur quasi, molestias, culpa odio adipisci. Nesciunt optio fugiat iste quam modi, ex vitae
							odio pariatur! Corrupti explicabo at harum qui doloribus, sit dicta nemo, dolor, enim eum molestias
							fugiat obcaecati autem eligendi? Nisi delectus eaque architecto voluptatibus, unde sit minus quae
							quod eligendi soluta recusandae doloribus, officia, veritatis voluptatum eius aliquam quos.
							Consectetur, nisi? Veritatis totam, unde nostrum exercitationem tempora suscipit, molestias,
							deserunt ipsum laborum aut iste eaque? Vitae delectus dicta maxime non mollitia? Sapiente eos a
							quia eligendi deserunt repudiandae modi molestias tenetur autem pariatur ullam itaque, quas
							eveniet, illo quam rerum ex obcaecati voluptatum nesciunt incidunt culpa provident illum soluta.
							Voluptas possimus nesciunt inventore perspiciatis neque fugiat, magnam natus repellendus
							praesentium eum voluptatum, alias incidunt, tempora reprehenderit recusandae et numquam itaque
							ratione dolor voluptatibus in commodi ut! Neque deserunt nostrum commodi dolor natus quo, non vitae
							deleniti, vero voluptatem error aspernatur veniam expedita numquam amet quia in dolores velit esse
							molestiae! Iusto architecto accusantium quisquam recusandae quod vero quia.
						</p>
					</div>
				</div>
			</div>
			<div class="share-post">
				<h4 class="title">
					SHARE THIS POST
				</h4>
				<ul class="social-icons">
					<li class="items"><a href="/" class="facebook"><i class="fa-brands fa-facebook-f"></i></a></li>
					<li class="items"><a href="/" class="twitter"><i class="fa-brands fa-twitter"></i></a></li>
					<li class="items"><a href="/" class="drible"><i class="fa-brands fa-dribbble"></i></a></li>
					<li class="items"><a href="/" class="instagram"><i class="fa-brands fa-square-instagram"></i></a></li>
					<li class="items"><a href="/" class="googleplus"><i class="fa-brands fa-google-plus-g"></i></a></li>
				</ul>
			</div>
			<div class="reviews">
				<h4 class="title">
					10 COMMENTS
				</h4>

				<ReviewVue>
					<ReviewVue>

						<ReviewVue />
					</ReviewVue>

				</ReviewVue>
				<ReviewVue v-for="i in 2" :key="i" />
			</div>
			<div class="comments-form">
				<h4 class="title">
					LEAVE YOU COMMENTS
				</h4>
				<form action="">
					<div class="d-flex gap-3">
						<MainInput placeholder="Name *"></MainInput>
						<MainInput type="email" placeholder="Email *"></MainInput>
					</div>

					<MainInput placeholder="Website"></MainInput>
					<textarea placeholder="Comment" name="" id="" cols="60" rows="5"></textarea>
					<div>
						<DarkButton>Send comment</DarkButton>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script setup>

import PageHeaderVue from '@/components/PageHeader.vue';
import ReviewVue from '@/components/Review.vue';
import { usePostStore } from '@/stores/posts';
import { computed } from 'vue';
const postStore = usePostStore()
const post = computed(() => postStore.posts[0])
const getImageUrl = (name) => {
	return new URL(`../assets/images/blog/${name}`, import.meta.url).href
}
</script>

<style lang="scss" scoped>
.single-blog {
	.main {

		padding: 70px 0;
	}

	.title {
		font-size: 16px;
		font-weight: 300;
		border-bottom: 1px solid #dedede;
		padding-bottom: 20px;
		margin: 20px 0;
		letter-spacing: 2px;
	}

	.post {
		background: #fff;
		margin-bottom: 40px;
		padding-bottom: 20px;

		.img-box {
			img {
				width: 100%;
			}
		}

		.post-body {
			padding-left: 20px;
			margin-top: 20px;

			.post-title {
				font-size: 20px;
				font-weight: 300;
			}

			.post-info {
				margin: 5px 0;
				font-size: 12px;
				text-transform: uppercase;
				display: flex;
				flex-wrap: wrap;
				row-gap: 5px;
				column-gap: 15px;
				color: #5f5b5b;
				font-weight: 300;

				i {
					margin-right: 5px;
				}

				a {
					margin-left: 5px;
				}
			}

			.post-text {
				padding: 5px 0;

				p {
					font-size: 14px;
					line-height: 30px;
					margin: 10px 0;
				}

				.quote {
					margin: 20px 0;
					padding: 20px 40px;
					border-left: 5px solid #000;
				}

				pre {
					display: block;
					padding: 9.5px;
					margin: 0 0 10px;
					font-size: 13px;
					line-height: 1.42857143;
					color: #333;
					word-break: break-all;
					word-wrap: break-word;
					background-color: #f5f5f5;
					border: 1px solid #ccc;
					border-radius: 4px;
				}
			}
		}
	}

	.share-post {
		margin-bottom: 50px;

		.social-icons {
			display: flex;
			align-items: center;
			gap: 5px;

			.items {

				display: inline-block;

				a {
					display: inline-block;
					font-size: 18px;
					color: #fff;
					padding: 7px 12px;
				}
			}

			.facebook {
				background: #3b5998;
			}

			.twitter {
				background: #00aced;
			}

			.drible {
				background: #ea4c89;

			}

			.instagram {
				background: #bc2a8d;
			}

			.googleplus {
				background: #dd4b39;
			}
		}
	}

	.comments-form {
		margin-bottom: 65px;

		form {
			display: flex;
			flex-direction: column;
			gap: 15px;

			input {
				flex-grow: 1;
				font-size: 14px;
				line-height: 2;

				&::placeholder {
					color: #888;
				}
			}

			textarea {
				font-size: 14px;
				padding: 0.5em 1.2em;
				border: 1px solid #ccc;

				&::placeholder {
					color: #888;
					font-size: 14px;
					font-weight: 400;
				}

				&:focus {
					border-color: black;
					border-radius: 0;
					border-width: 1px;
				}
			}

			.dark-btn {
				font-size: 10px;
				padding: 8px 25px;
			}
		}
	}

}
</style>