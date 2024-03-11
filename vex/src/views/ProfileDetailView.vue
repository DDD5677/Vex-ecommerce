<template>
	<section class="profile-detail">
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
								<DarkButton :to="{ name: 'orders' }">Address</DarkButton>
							</li>
							<li>
								<DarkButton :to="{ name: 'profile' }" class="dark">Profile Details</DarkButton>
							</li>
						</ul>
						<div class="wrapper">
							<div class="user-info">
								<div class="left">
									<div class="img-box">
										<img src="@/assets/images/avater.jpg" alt="">
									</div>
									<a href="#" class="btn btn-outline-dark">Change Image</a>
								</div>
								<div class="info">
									<ul>
										<li><span>Full Name:</span>Johanna Doe</li>
										<li><span>Country:</span>USA</li>
										<li><span>Email:</span>mail@gmail.com</li>
										<li><span>Phone:</span>+880123123</li>
										<li><span>Date of Birth:</span>Dec , 22 ,1991</li>
									</ul>
								</div>
							</div>
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
.profile-detail {
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

				.left {
					display: flex;
					flex-direction: column;
					align-items: center;

					.img-box {
						padding-right: 10px;

						img {
							width: 180px;
							border-radius: 50%;
						}
					}

					.btn-outline-dark {
						border: none;
						font-size: 11px;
						letter-spacing: 1px;
						text-transform: uppercase;
						margin-top: 20px;

						&:hover {
							background-color: #fff;
							color: #000;
						}
					}
				}

				.info {
					flex-grow: 1;

					ul {
						margin-top: 30px;
						padding-left: 30px;


						li {
							font-size: 14px;
							margin-bottom: 8px;

							span {
								display: inline-block;
								width: 100px;
								font-weight: 600;
								margin-right: 5px;
							}
						}
					}
				}
			}


		}
	}
}
</style>