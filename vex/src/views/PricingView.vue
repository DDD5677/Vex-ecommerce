<template>
	<section class="pricing-page">
		<PageHeader title="Pricing" />
		<div class="container">
			<div class="row">
				<div v-for="i in 3" :key="i" class="col-md-4">
					<div class="pricing-cart">
						<div class="name">Basic </div>
						<div class="price">$99</div>
						<p class="dsc">Perfect for single freelancers who work by themselves</p>
						<ul>
							<li class="item">1GB Disk Space</li>
							<li class="item">10 Email Account</li>
							<li class="item">Script Installer</li>
							<li class="item">1 GB Storage</li>
							<li class="item">10 GB Bandwidth</li>
							<li class="item">24/7 Tech Support</li>
						</ul>
						<DarkButton>Signup</DarkButton>
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
.pricing-page {
	.pricing-cart {
		padding: 40px 55px 65px;
		margin-bottom: 20px;
		font-size: 14px;
		color: #757575;

		.name {
			padding-top: 30px;
			font-size: 15px;
			font-weight: 700;
			color: #333;
			text-transform: uppercase;
		}

		.price {
			padding: 5px 0;
			font-size: 50px;
			color: #000;
			font-weight: 700;
		}

		.dsc {
			margin: 5px 0 10px;
		}

		ul {
			padding-top: 20px;

			.item {
				padding: 10px 0;
			}
		}

		.dark-btn {
			margin-top: 20px;
		}
	}
}
</style>