<template>
	<section class="coming-soon">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<p class="subtitle">The countdown is finished!</p>
					<h1>Hello, we're Aviato and<br />
						we are almost ready for launch</h1>
					<ul class="social-icons">
						<li class="items"><a href="/"><i class="fa-brands fa-facebook-f"></i></a></li>
						<li class="items"><a href="/"><i class="fa-brands fa-twitter"></i></a></li>
						<li class="items"><a href="/"><i class="fa-brands fa-linkedin"></i></a></li>
						<li class="items"><a href="/"><i class="fa-brands fa-github-alt"></i></a></li>
						<li class="items"><a href="/"><i class="fa-brands fa-pinterest"></i></a></li>
						<li class="items"><a href="/"><i class="fa-brands fa-square-instagram"></i></a></li>
					</ul>
					<p class="copyright">Copyright © 2020. Designed & Developed by Djumakulov. D.</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.coming-soon {
	padding: 150px 0;
	background-image: url("@/assets/images/backgrounds/coming-soon-bg.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	height: 100vh;
	color: white;
	position: relative;

	&::before {
		content: '';
		background: rgba(0, 0, 0, 0.51);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.row {
		position: relative;
		z-index: 1;
		text-align: center;

		.subtitle {
			margin: 20px 0 10px;
			font-size: 18px;
		}

		h1 {
			font-size: 25px;
			line-height: 40px;
			font-weight: 400;
			margin: 20px 0 10px;
		}

		ul {
			list-style: none;
			display: flex;
			justify-content: center;
		}

		.social-icons {
			.items {
				padding: 8px 12px;

				a {
					font-size: 18px;
					color: #fff;
				}
			}
		}

		.copyright {
			font-size: 12px;
			margin: 20px 0 10px;
		}
	}
}
</style>