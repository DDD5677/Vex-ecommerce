<template>
	<section class="carousel-section ">
		<div id="carouselExampleCaptions" class="carousel slide">
			<div class="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
					aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
					aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
					aria-label="Slide 3"></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="@/assets/images/slider/slider-1.jpg" class="d-block w-100" alt="...">
					<div class="carousel-caption text-center me-auto ms-auto d-none d-md-block">
						<h5>Products</h5>
						<h4>The beauty of nature is hidden in details</h4>
						<button class="btn btn-outline-light">Shop Now</button>
					</div>
				</div>
				<div class="carousel-item">
					<img src="@/assets/images/slider/slider-2.jpg" class="d-block w-100 h-100" alt="...">
					<div class="carousel-caption text-end ms-auto d-none d-md-block">
						<h5>Products</h5>
						<h4>The beauty of nature is hidden in details</h4>
						<button class="btn btn-outline-light">Shop Now</button>
					</div>
				</div>
				<div class="carousel-item">
					<img src="@/assets/images/slider/slider-3.jpg" class="d-block w-100" alt="...">
					<div class="carousel-caption text-start me-auto d-none d-md-block">
						<h5>Products</h5>
						<h4>The beauty of nature is hidden in details</h4>
						<button class="btn btn-outline-light">Shop Now</button>
					</div>
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
				data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
				data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</section>
</template>

<script setup>

</script>

<style scoped lang="scss">
.carousel-section {
	margin-bottom: 30px;

	.carousel {
		.carousel-indicators {
			bottom: -40px;

			button {
				width: 8px;
				height: 8px;
				border-radius: 50%;
				margin: 0 15px;
				background-color: black;
			}
		}

		.carousel-inner {

			.carousel-item {
				max-height: 600px;

				img {
					object-fit: contain;
					object-position: top;
					-webkit-filter: brightness(50%);
					filter: brightness(50%);
				}

				.carousel-caption {
					bottom: 50%;
					transform: translateY(50%);
					font-family: "Playfair Display", serif;
					width: min(100%, 500px);


					h5 {
						text-transform: uppercase;
						font-size: 14px;
						margin-bottom: 0;
					}

					h4 {
						margin: 15px 0 25px;
						font-size: 45px;
					}

					button {
						border-radius: 0;
						padding: 10px 25px;
					}
				}
			}

		}

		.carousel-control-prev,
		.carousel-control-next {
			opacity: 1;

			width: 10%;


			&-icon {
				-webkit-filter: invert(100%);
				/* Safari/Chrome */
				filter: invert(100%);
				background-color: black;
				border-radius: 50%;
				padding: 30px;
				background-size: 45%;
				transition: all 0.3s ease-in;

				&:hover {
					-webkit-filter: invert(0%);
					/* Safari/Chrome */
					filter: invert(0%);
				}
			}
		}

		.carousel-control-prev-icon {
			background-position: 45% 50%;
		}

		.carousel-control-next-icon {
			background-position: 55% 50%;
		}
	}
}
</style>