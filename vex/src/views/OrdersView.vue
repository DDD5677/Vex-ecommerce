<template>
	<section class="orders">
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
								<DarkButton :to="{ name: 'orders' }" class="dark">Orders</DarkButton>
							</li>
							<li>
								<DarkButton :to="{ name: 'address' }">Address</DarkButton>
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
											Order ID
										</th>
										<th>Date</th>
										<th>Items</th>
										<th>Total Price</th>
										<th>Status</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>#252125</td>
										<td>Mar 25, 2016</td>
										<td>2</td>
										<td> $ 99.00</td>
										<td><span class="badge text-bg-primary">Processing</span></td>
										<td><a href="#" class="btn btn-outline-dark">View</a></td>
									</tr>
									<tr>
										<td>#252125</td>
										<td>Mar 25, 2016</td>
										<td>2</td>
										<td> $ 99.00</td>
										<td><span class="badge text-bg-success">Completed</span></td>
										<td><a href="#" class="btn btn-outline-dark">View</a></td>
									</tr>
									<tr>
										<td>#252125</td>
										<td>Mar 25, 2016</td>
										<td>2</td>
										<td> $ 99.00</td>
										<td><span class="badge text-bg-danger">Canceled</span></td>
										<td><a href="#" class="btn btn-outline-dark">View</a></td>
									</tr>
									<tr>
										<td>#252125</td>
										<td>Mar 25, 2016</td>
										<td>2</td>
										<td> $ 99.00</td>
										<td><span class="badge text-bg-info">On Hold</span></td>
										<td><a href="#" class="btn btn-outline-dark">View</a></td>
									</tr>
									<tr>
										<td>#252125</td>
										<td>Mar 25, 2016</td>
										<td>2</td>
										<td> $ 99.00</td>
										<td><span class="badge text-bg-warning">Pending</span></td>
										<td><a href="#" class="btn btn-outline-dark">View</a></td>
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
.orders {
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

						&:hover {
							border-color: #757575;
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