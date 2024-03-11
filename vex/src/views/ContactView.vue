<template>
	<section class="contact-page">
		<PageHeader title="Contact Us" />
		<div class="container main">
			<div class="row">
				<div class="col-md-6">
					<form action="">
						<MainInput placeholder="Your Name"></MainInput>
						<MainInput type="email" placeholder="Your Email"></MainInput>
						<MainInput placeholder="Subject"></MainInput>
						<textarea placeholder="Message" name="" id="" cols="60" rows="5"></textarea>
						<DarkButton>Submit</DarkButton>
					</form>
				</div>
				<div class="col-md-6">
					<div class="contact-map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9932.82321342531!2d-0.12893596760535428!3d51.509440192894786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce176ac979%3A0x42af85654e23a0b4!2z0J3QsNGG0LjQvtC90LDQu9GM0L3QsNGPINCz0LDQu9C10YDQtdGP!5e0!3m2!1sru!2s!4v1710067692604!5m2!1sru!2s"
							width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
					<div class="contact-info">
						<ul>
							<li><span><i class="fa-solid fa-house"></i></span><span>Khaja Road, Bayzid, Chittagong,
									Bangladesh</span></li>
							<li><span><i class="fa-solid fa-mobile-screen"></i></span><span>Phone: +880-31-000-000</span></li>
							<li><span><i class="fa-solid fa-earth-americas"></i></span><span> Fax: +880-31-000-000</span></li>
							<li><span><i class="fa-solid fa-envelope"></i></span><span>Email: hello@example.com</span></li>
						</ul>
					</div>
					<div class="social-icons">
						<ul>
							<li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
							<li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa-brands fa-dribbble"></i></a></li>
							<li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>
							<li><a href="#"><i class="fa-brands fa-pinterest"></i></a></li>
						</ul>
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
.contact-page {
	.main {
		padding: 70px 0;

	}

	form {
		display: flex;
		flex-direction: column;
		gap: 15px;

		input {
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
	}

	.contact-map {

		iframe {
			height: 300px;
			width: 100%;
			filter: brightness(50%);
		}
	}

	.contact-info {
		font-size: 14px;
		color: #555;
		margin-top: 20px;
		font-weight: 300;

		ul {
			li {
				display: flex;
				gap: 10px;
				margin-bottom: 6px;
			}
		}
	}

	.social-icons {
		margin-top: 20px;

		ul {
			display: flex;
			gap: 10px;

			li {
				a {
					height: 50px;
					width: 50px;
					border-radius: 50%;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					color: #333;
					transition: all 0.3s ease-in-out;
					border: 1px solid #333;

					&:hover {
						color: #fff;
						background-color: #000;
					}
				}
			}
		}
	}
}
</style>