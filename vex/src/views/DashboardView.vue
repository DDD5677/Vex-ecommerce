<template>
	<section class="dashboard">
		<PageHeader title="Dashboard" />
		<div class="user-dashboard">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<ul class="btns">
							<li>
								<DarkButton :to="{ name: 'dashboard' }" class="dark">Dashboard</DarkButton>
							</li>
							<li>
								<DarkButton :to="{ name: 'orders' }">Orders</DarkButton>
							</li>
							<li>
								<DarkButton :to="{ name: 'address' }">Address</DarkButton>
							</li>
							<li>
								<DarkButton :to="{ name: 'profile' }">Profile Details</DarkButton>
							</li>
						</ul>
						<div class="wrapper">
							<div class="user-info">
								<div class="img-box">
									<img src="@/assets/images/avater.jpg" alt="">
								</div>
								<div class="info">
									<h2 class="name">
										Welcome Adam Smith
									</h2>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, iure, est. Sit mollitia
										est maxime! Eos cupiditate tempore, tempora omnis. Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Enim, nihil.
									</p>
								</div>
							</div>
							<h4 class="total-orders">Total Orders</h4>
							<table>
								<thead>
									<tr>
										<th>
											Order ID
										</th>
										<th>Date</th>
										<th>Items</th>
										<th>Total Price</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="i in 3" :key="i">
										<td>#252125</td>
										<td>Mar 25, 2016</td>
										<td>2</td>
										<td> $ 99.00</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'
</script>

<style lang="scss" scoped>
.dashboard {
	.user-dashboard {
		padding: 70px 0;

		.btns {
			display: flex;
			justify-content: center;
			gap: 10px;

			.dark-btn {
				background-color: #fff;
				color: #000;
				font-size: 14px;
				padding: 10px 20px;
				text-transform: capitalize;
				font-weight: 400;
				letter-spacing: normal;

				&.dark {
					background-color: #000;
					color: #fff;
				}
			}

		}

		.wrapper {
			border: 1px solid #dedede;
			margin-top: 30px;
			padding: 20px;

			.user-info {
				display: flex;

				.img-box {
					padding-right: 10px;

					img {
						width: 120px;
						border-radius: 50%;
					}
				}

				.info {
					.name {
						font-size: 18px;
						margin-bottom: 5px;
					}

					p {
						font-size: 15px;
						color: #757575;
						margin-bottom: 10px;
					}
				}
			}

			.total-orders {
				font-size: 16px;
				margin: 20px 0 10px;
			}

			table {
				width: 100%;

				th,
				td {
					padding: 8px;
					font-size: 14px;
					line-height: 1.4;
				}

				th {
					border-bottom: 2px solid #ddd;

				}

				td {
					border-top: 1px solid #ddd;
				}
			}
		}
	}
}
</style>