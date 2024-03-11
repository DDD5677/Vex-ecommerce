<template>
	<footer class="footer">
		<ul class="social-icons">
			<li class="items"><a href="/"><i class="fa-brands fa-facebook-f"></i></a></li>
			<li class="items"><a href="/"><i class="fa-brands fa-square-instagram"></i></a></li>
			<li class="items"><a href="/"><i class="fa-brands fa-twitter"></i></a></li>
			<li class="items"><a href="/"><i class="fa-brands fa-pinterest"></i></a></li>
		</ul>
		<ul class="menu">
			<li class="menu-item"><router-link to="/">CONTACT</router-link></li>
			<li class="menu-item"><router-link to="/">SHOP</router-link></li>
			<li class="menu-item"><router-link to="/">PRICING</router-link></li>
			<li class="menu-item"><router-link to="/">PRIVACY POLICY</router-link></li>
		</ul>
		<div class="info text-center">
			<p>
				Copyright ©2024, Designed & Developed by <a href="/">Djumakulov. D</a>
			</p>
		</div>
	</footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
	padding: 50px 0;
	background-color: #f7f7f7;

	ul {
		list-style: none;
		display: flex;
		justify-content: center;
	}

	.social-icons {
		.items {
			padding: 8px 10px;
			margin: 0 5px;

			a {
				font-size: 18px;
				color: #555;
			}
		}
	}

	.menu {
		margin-top: 30px;

		.menu-item {
			margin: 0 10px;
			font-size: 12px;

			a {
				color: #555;

				&:hover {
					color: black;
				}
			}
		}
	}

	.info {
		p {
			color: #757575;
			margin: 20px 0 10px;
			font-size: 15px;
		}
	}
}
</style>