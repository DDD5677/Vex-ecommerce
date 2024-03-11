<template>
	<section class="signup">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-8 col-lg-6">
					<div class="form">
						<brand></brand>
						<h2 class="title">
							CREATE YOUR ACCOUNT
						</h2>
						<form action="">
							<MainInput type="text" placeholder="Firstname" required></MainInput>
							<MainInput type="text" placeholder="Lastname" required></MainInput>
							<MainInput type="text" placeholder="Username" required></MainInput>
							<MainInput type="email" placeholder="Email" required></MainInput>
							<MainInput type="password" placeholder="Password" required></MainInput>
							<DarkButton btn>Sign in</DarkButton>
						</form>
						<p>Already hava an account ? <RouterLink to="/signin">Login</RouterLink>
						</p>
						<p class="m-0 mb-2">
							<RouterLink to="/forgetpassword">Forgot your password?</RouterLink>
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.signup {
	.form {
		margin: 100px 0;
		padding: 30px;
		border: 1px solid #dedede;
		text-align: center;

		.title {
			font-size: 25px;
			margin: 40px 0 10px;
		}

		form {
			margin-top: 40px;
		}

		.main-input {
			width: 100%;
			margin-bottom: 15px;
			height: 45px;
			font-size: 12px;
		}

		p {
			font-size: 15px;
			margin: 20px 0 10px;
			color: #757575;
		}
	}
}
</style>