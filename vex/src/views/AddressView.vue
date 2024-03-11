<template>
	<section class="address">
		<PageHeader title="Dashboard" />
		<div class="user-dashboard">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<ul class="btns">
							<li>
								<DarkButton :to="{ name: 'dashboard' }">Dashboard</DarkButton>
							</li>
							<li>
								<DarkButton :to="{ name: 'orders' }">Orders</DarkButton>
							</li>
							<li>
								<DarkButton :to="{ name: 'address' }" class="dark">Address</DarkButton>
							</li>
							<li>
								<DarkButton :to="{ name: 'profile' }">Profile Details</DarkButton>
							</li>
						</ul>
						<div class="wrapper">
							<table>
								<thead>
									<tr>
										<th>
											Company
										</th>
										<th>Name</th>
										<th>Address</th>
										<th>Country</th>
										<th>Phone</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="i in 3" :key="i">
										<td>Samsung</td>
										<td>Adam Smith</td>
										<td>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
										<td>Bangladesh</td>
										<td>+884 5452 6452</td>
										<td>
											<a href="#" class="btn btn-outline-dark pencil"><i class="fa-solid fa-pencil"></i></a>
											<a href="#" class="btn btn-outline-dark xmark"><i class="fa-solid fa-xmark"></i></a>
										</td>
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
.address {
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

					.badge {
						color: #fff !important;
					}

					a {
						padding: 6px 12px;
						font-size: 14px;
						border-color: #ddd;
						line-height: normal;

						&.pencil {
							border-top-right-radius: 0;
							border-bottom-right-radius: 0;
						}

						&.xmark {
							border-top-left-radius: 0;
							border-bottom-left-radius: 0;
						}

						&:hover,
						&:focus {
							background-color: #e7e7e7;
							color: #000;
						}
					}
				}
			}
		}
	}
}
</style>