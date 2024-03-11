<template>
	<header class="header container">
		<div class="navbar-top">
			<div class="row align-items-center">
				<div class="col-md-4">
					<div class="phone text-start">
						<Icon>
							<PhoneIcon />
						</Icon>
						<a href="tel:+998903385677" class="tel">+998(90)-338-56-77</a>
					</div>
				</div>
				<div class="col-md-4 d-flex justify-content-center">
					<brand />
				</div>
				<div class="col-md-4">
					<ul class="nav justify-content-end">

						<li @mouseover="showCart" @mouseleave="hideCart" class="nav-item">
							<a class="nav-link active d-flex align-items-center" aria-current="page" href="#">
								<Icon>
									<ShoppingCartIcon />
								</Icon>Cart
							</a>
							<Transition>
								<ul v-if="cart" class="dropdown-menu d-flex flex-column">
									<li><a class="dropdown-item" href="#">Blog left sidebar</a></li>
									<li><a class="dropdown-item" href="#">Blog right sidebar</a></li>
									<li><a class="dropdown-item" href="#">Blog full width</a></li>
									<li><a class="dropdown-item" href="#">Blog two columns</a></li>
									<li><a class="dropdown-item" href="#">Blog single</a></li>
								</ul>
							</Transition>
						</li>
						<li @mouseover="showSearch" @mouseleave="hideSearch" class="nav-item">
							<a class="nav-link d-flex align-items-center" href="#">
								<Icon>
									<MagnifyingGlassIcon />
								</Icon>Search
							</a>
							<Transition>
								<ul v-if="search" class="search dropdown-menu d-flex">
									<div class="input-group input-group-sm">
										<input type="text" class="form-control" placeholder="Search..."
											aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
									</div>
								</ul>
							</Transition>
						</li>
						<li class="nav-item dropdown">
							<select class="form-select" aria-label="Default select example">
								<option selected value="en">EN</option>
								<option value="ru">RUS</option>
								<option value="uz">UZ</option>
							</select>
						</li>
					</ul>
				</div>
			</div>



		</div>
		<nav class="navbar navbar-expand-lg">
			<div class="container-fluid">
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse d-lg-flex justify-content-lg-center  navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li @mouseover="showShop" @mouseleave="hideShop" class="nav-item">
							<a class="nav-link d-flex align-items-center" href="#">
								Shop
								<Icon :width="14">
									<ChevronDownIcon />
								</Icon>
							</a>
							<Transition>
								<ul v-if="shop" class="dropdown-menu d-flex justify-content-between flex-column flex-md-row">
									<div>
										<li><a class="dropdown-item disabled" href="#">Pages</a></li>
										<li>
											<RouterLink :to="{ name: 'shop' }" class="dropdown-item" href="#">Shop</RouterLink>
										</li>
										<li>
											<RouterLink :to="{ name: 'checkout' }" class="dropdown-item" href="#">Check out
											</RouterLink>
										</li>
										<li>
											<RouterLink :to="{ name: 'cart' }" class="dropdown-item" href="#">Cart</RouterLink>
										</li>
										<li>
											<RouterLink :to="{ name: 'pricing' }" class="dropdown-item" href="#">Pricing
											</RouterLink>
										</li>
										<li>
											<RouterLink :to="{ name: 'confirmation' }" class="dropdown-item" href="#">Confirmation
											</RouterLink>
										</li>

									</div>
									<div>
										<li><a class="dropdown-item disabled" href="#">Layout</a></li>
										<li>
											<RouterLink :to="{ name: 'productDetail' }" class="dropdown-item" href="#">Product
												details
											</RouterLink>
										</li>
										<li>
											<RouterLink :to="{ name: 'shopWithSidebar' }" class="dropdown-item" href="#">Shop with
												sidebar</RouterLink>
										</li>

									</div>
								</ul>
							</Transition>
						</li>
						<li @mouseover="showPages" @mouseleave="hidePages" class="nav-item">
							<a class="nav-link d-flex align-items-center" href="#">
								Pages
								<Icon :width="14">
									<ChevronDownIcon />
								</Icon>
							</a>
							<Transition>
								<ul v-if="pages"
									class="dropdown-menu pages d-flex justify-content-between flex-column flex-md-row">
									<div>
										<li><a class="dropdown-item disabled" href="#">Introduction</a></li>
										<li>
											<RouterLink :to="{ name: 'contact' }" class="dropdown-item" href="#">Contact us
											</RouterLink>
										</li>
										<li>
											<RouterLink :to="{ name: 'about us' }" class="dropdown-item" href="#">About us
											</RouterLink>
										</li>
										<li>
											<RouterLink :to="{ name: '404' }" class="dropdown-item" href="#">404 page</RouterLink>
										</li>
										<li>
											<RouterLink :to="{ name: 'comingSoon' }" class="dropdown-item" href="#">Coming soon
											</RouterLink>
										</li>
										<li>
											<RouterLink :to="{ name: 'f.a.q' }" class="dropdown-item" href="#">faq</RouterLink>
										</li>

									</div>
									<div>
										<li><a class="dropdown-item disabled" href="#">Dashboard</a></li>
										<li>
											<RouterLink :to="{ name: 'dashboard' }" class="dropdown-item" href="#">User interface
											</RouterLink>
										</li>
										<li>
											<RouterLink :to="{ name: 'orders' }" class="dropdown-item" href="#">Orders</RouterLink>
										</li>
										<li>
											<RouterLink :to="{ name: 'address' }" class="dropdown-item" href="#">Address
											</RouterLink>
										</li>
										<li>
											<RouterLink :to="{ name: 'profile' }" class="dropdown-item" href="#">Profile details
											</RouterLink>
										</li>

									</div>
									<div>
										<li><a class="dropdown-item disabled" href="#">Utility</a></li>
										<li>
											<RouterLink :to="{ name: 'signin' }" class="dropdown-item" href="#">Login page
											</RouterLink>
										</li>
										<li>
											<RouterLink :to="{ name: 'signup' }" class="dropdown-item" href="#">Signin page
											</RouterLink>
										</li>
										<li>
											<RouterLink :to="{ name: 'forgetpassword' }" class="dropdown-item" href="#">Forget
												password</RouterLink>
										</li>

									</div>
									<div class="header-img">
										<RouterLink to="/">
											<img src="@/assets/images/shop/header-img.jpg" alt="">

										</RouterLink>
									</div>
								</ul>
							</Transition>
						</li>
						<li @mouseover="showBlog" @mouseleave="hideBlog" class="nav-item">
							<a class="nav-link d-flex align-items-center" href="#">
								Blog
								<Icon :width="14">
									<ChevronDownIcon />
								</Icon>
							</a>
							<Transition>
								<ul v-if="blog" class="dropdown-menu d-flex flex-column">
									<li><a class="dropdown-item" href="#">Blog left sidebar</a></li>
									<li><a class="dropdown-item" href="#">Blog right sidebar</a></li>
									<li><a class="dropdown-item" href="#">Blog full width</a></li>
									<li><a class="dropdown-item" href="#">Blog two columns</a></li>
									<li><a class="dropdown-item" href="#">Blog single</a></li>
								</ul>
							</Transition>
						</li>
						<li @mouseover="showElements" @mouseleave="hideElements" class="nav-item">
							<a class="nav-link d-flex align-items-center" href="#">
								Elements
								<Icon :width="14">
									<ChevronDownIcon />
								</Icon>
							</a>
							<Transition>
								<ul v-if="elements" class="dropdown-menu d-flex flex-column">
									<li><a class="dropdown-item" href="#">TYPOGRAPHY</a></li>
									<li><a class="dropdown-item" href="#">BUTTONS</a></li>

									<li><a class="dropdown-item" href="#">ALERTS</a></li>
								</ul>
							</Transition>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { ShoppingCartIcon, PhoneIcon } from '@heroicons/vue/24/solid'
import { MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';
const cart = ref(false)
const showCart = () => {
	cart.value = true
}
const hideCart = () => {
	cart.value = false
}
const search = ref(false)
const showSearch = () => {
	search.value = true
}
const hideSearch = () => {
	search.value = false
}
const elements = ref(false)
const showElements = () => {
	elements.value = true
}
const hideElements = () => {
	elements.value = false
}
const blog = ref(false)
const showBlog = () => {
	blog.value = true
}
const hideBlog = () => {
	blog.value = false
}
const pages = ref(false)
const showPages = () => {
	pages.value = true
}
const hidePages = () => {
	pages.value = false
}
const shop = ref(false)
const showShop = () => {
	shop.value = true
}
const hideShop = () => {
	shop.value = false
}
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
	transition: all 0.35s ease;
}

.v-enter-from,
.v-leave-to {
	transform: translateY(30px);
	opacity: 0;
}

.header {
	font-size: 15px;

	.nav-link {
		border-radius: 8px;
		transition: all 0.3s ease-in-out;

		&:hover {
			background-color: #f8f9fa;
		}
	}

	.navbar-top {
		//display: flex;
		//justify-content: space-between;
		//align-items: center;
		padding: 25px 0;
		border-bottom: 2px solid #f2f2f2;


		.phone {
			display: flex;
			align-items: center;
			font-weight: 500;
			font-size: 12px;
		}

		.nav {


			.nav-link {
				color: black;

				.icon {
					margin-right: 8px;
				}
			}

			.search {
				padding: 15px;
			}

			select {
				border: none;
				cursor: pointer;

				&:focus {
					box-shadow: none;
				}
			}
		}
	}

	nav.navbar {
		padding-top: 30px;
		padding-bottom: 30px;

		.container-fluid {
			display: flex;
			justify-content: flex-end;

			.nav-link {
				padding: 8px 15px;
			}
		}

		.dropdown-menu {
			border: none;
			padding-top: 20px;

			&.pages {
				left: 15%
			}

			.dropdown-item {
				font-size: 14px;
				padding: 10px 20px;
				text-transform: uppercase;

				&.disabled {
					border-bottom: 1px solid #f2f2f2;
					text-transform: capitalize;
					font-size: 16px;
				}
			}

			.header-img {
				img {
					height: 230px;
					margin: 20px;
					border-radius: 5px;
				}
			}
		}

	}
}
</style>