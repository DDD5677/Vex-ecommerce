<template>
	<section class="about-page">
		<PageHeader title="Shop" />
		<div class="container main">
			<div class="about-shop">
				<div class="row">
					<div class="col-md-6">
						<div class="img-box">
							<img src="@/assets/images/about/about.jpg" alt="">
						</div>
					</div>
					<div class="col-md-6">
						<div class="content">
							<div class="title">
								About Our Shop
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius enim, accusantium repellat ex
								autem numquam iure officiis facere vitae itaque.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam qui vel cupiditate exercitationem,
								ea fuga est velit nulla culpa modi quis iste tempora non, suscipit repellendus labore voluptatem
								dicta amet?
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam qui vel cupiditate exercitationem,
								ea fuga est velit nulla culpa modi quis iste tempora non, suscipit repellendus labore voluptatem
								dicta amet?
							</p>
							<DarkButton>Download company profile</DarkButton>
						</div>
					</div>
				</div>
				<div class="row text-center shop-logos">
					<div class="col-md-3"><img src="@/assets/images/about/awards-logo.png" alt="awards-logo"></div>
					<div class="col-md-3"><img src="@/assets/images/about/awards-logo.png" alt="awards-logo"></div>
					<div class="col-md-3"><img src="@/assets/images/about/awards-logo.png" alt="awards-logo"></div>
					<div class="col-md-3"><img src="@/assets/images/about/awards-logo.png" alt="awards-logo"></div>
				</div>
			</div>
			<div class="team">
				<div class="title">
					<h2>TEAM MEMBERS</h2>
				</div>
				<div class="row">
					<div class="col-md-3">
						<div class="member">
							<div class="img-box">
								<img src="@/assets/images/team/team-1.jpg" alt="team-1">
							</div>
							<div class="info">
								<h4 class="name">Jonathon Andrew</h4>
								<div class="prof">Founder</div>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="member">
							<div class="img-box">
								<img src="@/assets/images/team/team-2.jpg" alt="team-1">
							</div>
							<div class="info">
								<h4 class="name">Adipisci Velit</h4>
								<div class="prof">Developer</div>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="member">
							<div class="img-box">
								<img src="@/assets/images/team/team-3.jpg" alt="team-1">
							</div>
							<div class="info">
								<h4 class="name">John Fexit</h4>
								<div class="prof">Shop Manager</div>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="member">
							<div class="img-box">
								<img src="@/assets/images/team/team-1.jpg" alt="team-1">
							</div>
							<div class="info">
								<h4 class="name">Jonathon Andrew</h4>
								<div class="prof">Shop Manager</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="video">
			<div class="container">
				<div class="row text-center">
					<div>
						<h2>Video presentation</h2>
						<!-- Button trigger modal -->
						<button type="button" class="btn play" data-bs-toggle="modal" data-bs-target="#exampleModal">
							<i class="fa-solid fa-play"></i>
						</button>
					</div>

				</div>

			</div>

		</div>
		<!-- Modal -->
		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-body">
						<iframe class="w-100" width="560" height="315"
							src="https://www.youtube.com/embed/kffacxfA7G4?si=11Z43cgNs8rg--DH" title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen></iframe>
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
.about-page {
	.about-shop {
		padding: 80px 0;

		.img-box {
			img {
				height: 100%;
				width: 100%;
			}
		}

		.content {
			.title {
				margin: 40px 0 10px;
				font-size: 30px;
			}

			p {
				font-size: 15px;
				margin-bottom: 10px;
				color: #757575;
			}

			.dark-btn {
				margin-top: 20px;
			}
		}

		.shop-logos {
			margin-top: 40px;
		}
	}

	.team {
		text-align: center;

		.title {
			padding: 20px 0 30px;

			h2 {
				font-size: 18px;
				margin: 20px 0 10px;
				font-weight: 400;

			}
		}

		.member {
			.img-box {
				img {
					border-radius: 50%;
				}
			}

			.name {
				font-size: 18px;
				margin: 10px 0;
			}

			.prof {
				font-size: 15px;
				color: #757575;
				margin-bottom: 10px;
			}
		}
	}

	.video {
		padding: 80px 0;
		margin-top: 50px;
		background-image: url(@/assets/images/backgrounds/bg-1.jpg);
		background-size: cover;
		position: relative;

		&::before {
			content: '';
			background: rgba(255, 255, 255, 0.7);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		div {
			z-index: 1;
		}

		.play {
			border: 1px solid #dedede;
			display: inline-flex;
			width: 60px;
			height: 60px;
			border-radius: 50px;
			font-size: 20px;
			align-items: center;
			justify-content: center;
		}
	}

	.modal-dialog {
		max-width: 590px;

	}
}
</style>
