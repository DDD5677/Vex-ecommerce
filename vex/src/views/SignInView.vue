<template>
	<section class="signin">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6">
					<div class="form">
						<brand></brand>
						<h2 class="title">
							WELCOME BACK
						</h2>
						<form action="">
							<MainInput type="email" placeholder="Email" required></MainInput>
							<MainInput type="password" placeholder="Password" required></MainInput>
							<DarkButton btn>Login</DarkButton>
						</form>
						<p>New in this site ? <RouterLink to="/signup">Create New Account</RouterLink>
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
.signin {
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