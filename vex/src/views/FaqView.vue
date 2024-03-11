<template>
	<section class="faq">
		<PageHeader title="Frequently Asked Questions" />
		<div class="container main">
			<div class="row">
				<div class="col-md-4">
					<div class="left">
						<h2 class="title">
							Frequently Asked Questions
						</h2>
						<p class="text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, repudiandae.
						</p>
						<a href="#" class="email">admin@mail.com</a>
					</div>
				</div>
				<div class="col-md-8">
					<div class="right">
						<h4 class="subtitle">Order Status</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iusto, alias, tempora fuga quam
							eveniet neque excepturi aliquid. Eligendi, mollitia.</p>
						<h4 class="subtitle">Shipping & Delivery</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatibus, incidunt similique
							nobis sint quisquam nam ab error consequuntur sit ullam ex eum exercitationem, excepturi explicabo
							beatae eos aspernatur odit ad perspiciatis, neque saepe magni enim. Maiores quia, quae sequi.</p>
						<h4 class="subtitle">Payments</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus repellat id, laboriosam ipsa
							repudiandae quisquam, suscipit officiis, praesentium itaque facilis distinctio dolorum. Velit
							reiciendis libero laudantium corporis, delectus impedit sunt.</p>
						<h4 class="subtitle">Returns & Exchanges</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eaque nam, ab voluptas et debitis
							sint hic vel ratione dignissimos.</p>
						<h4 class="subtitle">Privacy Policy</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis quod saepe, inventore
							ipsum sint cum iste quae ratione nobis laborum minima autem totam similique, quia neque deleniti!
							Provident, suscipit.</p>
					</div>
				</div>
			</div>

		</div>
	</section>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue';


</script>

<style lang="scss" scoped>
.faq {
	.main {
		padding: 70px 0;

		p,
		a {
			color: #757575;
			font-size: 15px;
			margin-bottom: 10px;
		}

		.left {
			.title {
				margin: 20px 0 10px;
				font-size: 30px;
			}
		}

		.right {
			.subtitle {
				font-size: 18px;
				margin: 10px 0;
			}
		}
	}
}
</style>