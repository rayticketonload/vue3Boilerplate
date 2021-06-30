<template>
	<div class="test">login</div>
	<input type="text" v-model.trim="username" id="username" :placeholder="$t('yong-hu-ming')" />
	<input type="password" v-model.trim="password" id="password" :placeholder="$t('mi-ma')" />
	<el-button @click="login()" type="primary">
		{{ $t('deng-lu') }}
	</el-button>
	<!-- <section id="login-page-wrap">
		<div class="login-form-container">
			<div class="sys-name">
				<div class="login-solgan">
					Welcome
				</div>
				<div class="name">
					{{ $t('sys-name') }}
				</div>
			</div>
			<div class="login-form">
				<div class="login-form-control-box">
					<i class="el-icon-s-custom" :class="['login-form-control-icon', username.length > 0 ? 'focus' : '']"> </i>
					<i class="el-icon-error" v-if="username.length > 0" :class="'login-form-control-clear'" @click="clearVmodel('username')"> </i>
					<input @focus="clearErrorMsg" type="text" v-model.trim="username" id="username" :placeholder="$t('qing-shu-ru-yong-hu-ming')" />
				</div>
				<div class="login-form-control-box">
					<i class="el-icon-key" :class="['login-form-control-icon', password.length > 0 ? 'focus' : '']"> </i>
					<i class="el-icon-error" v-if="password.length > 0" :class="'login-form-control-clear'" @click="clearVmodel('password')"> </i>
					<input @focus="clearErrorMsg" @keyup.enter="login()" type="password" v-model.trim="password" id="password" :placeholder="$t('qing-shu-ru-mi-ma')" />
				</div>
				<div class="error" v-if="errorMsg">
					<i class="el-icon-warning" :class="'error-icon'"></i>
					{{ errorMsg }}
				</div>
				<div class="login-form-btn-box">
					<el-button @click="login()" :disabled="isDisabled" type="primary" class="login-btn">
						{{ $t('deng-lu') }}
					</el-button>
				</div>
				<div class="signup-or-change-password">
					<span class="login-form-link right">
						v{{ VERSION }}
					</span>
				</div>
			</div>
		</div>
	</section> -->
</template>

<script>
import { mapActions } from 'vuex';
import { STORE_TYPE, VERSION, ROUTE_NAME } from '@HELPER/global';

const { LOGIN, GET_PERMISSIONS } = STORE_TYPE;

export default {
	data() {
		return {
			VERSION,
			username: '',
			password: '',
			errorMsg: null,
			isDisabled: false,
		};
	},

	methods: {
		...mapActions({
			[LOGIN]: `profile/${LOGIN}`,
			[GET_PERMISSIONS]: `profile/${GET_PERMISSIONS}`,
		}),

		async login() {
			// if (!this.check()) {
			// 	return;
			// }

			// this.isDisabled = true;

			const params = {
				username: this.username,
				password: this.password,
			};

			try {
				const res = await this[LOGIN](params);
				if (res.code === 200 && res.message === 'success') {
					await this[GET_PERMISSIONS]();
					this.redirect();
				} else {
					this.errorMsg = res.data;
					this.isDisabled = false;
				}
			} catch (e) {
				if (e.errorMsg) {
					this.errorMsg = e.errorMsg;
				}
				this.isDisabled = false;
			}
		},

		clearVmodel(value) {
			switch (value) {
				case 'username':
					this.username = '';
					break;
				case 'password':
					this.password = '';
					break;
				default:
			}
		},

		clearErrorMsg() {
			this.errorMsg = null;
		},

		check() {
			if (!this.username) {
				this.errorMsg = this.$t('yong-hu-ming-wei-kong');
				return false;
			}

			if (!this.password) {
				this.errorMsg = this.$t('mi-ma-wei-kong');
				return false;
			}

			return true;
		},

		async redirect() {
			this.$router.push({
				name: ROUTE_NAME.RN_HOME,
			});
		},
	},
};
</script>

<style lang="scss" scoped>

.test {
	background-color: $themeColor-primary;
	padding: 50;
}

// @import '~@/style/theme/variable.scss';
// @import '~@/style/mixins/mixins.scss';

// $fontSize-login_form: $fontSize-default * 1.2;
// $bgColor-login_form: $themeColor-primary;

// #login-page-wrap {
// 	position: relative;
// 	width: 100%;
// 	height: 100%;
// 	background-image: url('~@/assets/login_bg.png');
// 	background-repeat: no-repeat;
// 	background-position: center center;
// 	background-size: cover;
// 	background-color: $bgColor-login_form;
// }

// .sys-name {
// 	padding-bottom: $gapSize-public * 8;

// 	.name {
// 		color: $themeColor-primary;
// 		font-size: $fontSize-larger;
// 		padding-top: $gapSize-public * 4;
// 		text-align: center;
// 	}

// 	.login-solgan {
// 		font-size: 52px;
// 		line-height: 1;
// 		color: $themeColor-primary;
// 		text-align: center;
// 		position: relative;
// 		padding-bottom: $gapSize-public * 4;
// 		font-weight: 200;

// 		&:after {
// 			content: '';
// 			position: absolute;
// 			height: 5px;
// 			width: 36px;
// 			background-color: $themeColor-primary;
// 			bottom: 0;
// 			left: 50%;
// 			margin-left: -18px;
// 		}
// 	}
// }

// .error {
// 	padding-top: $gapSize-public * 4;
// 	color: rgb(247, 181, 162);

// 	.error-icon {
// 		font-size: $fontSize-large;
// 		vertical-align: top;
// 	}
// }

// .login-form-container {
// 	box-sizing: border-box;
// 	position: absolute;
// 	left: 50%;
// 	top: 50%;
// 	transform: translate(-50%, -50%);
// 	width: 410px;
// 	padding: $gapSize-public * 6;
// 	background-color: #fff;
// 	@include rounded($borderRadius-public);
// 	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
// }

// .login-form {
// 	&-btn-box,
// 	&-control-box {
// 		position: relative;
// 	}

// 	&-control-icon {
// 		position: absolute;
// 		top: 50%;
// 		// left: $gapSize-public * 4;
// 		left: 0;
// 		transform: translate(0, -50%);
// 		font-size: $fontSize-larger;
// 		// color: lighten($bgColor-login_form, 30);
// 		color: #ccc;
// 		@include transition(all, 0.3s, ease, 0);

// 		&.focus {
// 			// color: lighten($bgColor-login_form, 55);
// 			color: lighten($bgColor-login_form, 38);
// 		}
// 	}

// 	&-control-clear {
// 		cursor: pointer;
// 		position: absolute;
// 		top: 50%;
// 		// right: $gapSize-public * 4;
// 		right: 0;
// 		transform: translate(0, -50%);
// 		font-size: $fontSize-larger;
// 		color: lighten($bgColor-login_form, 10);
// 		@include transition(all, 0.3s, ease, 0);

// 		&:hover {
// 			color: lighten($bgColor-login_form, 38);
// 		}
// 	}

// 	&-control-box {
// 		@include input-placeholder(#ccc);

// 		input[type='text'],
// 		input[type='password'] {
// 			display: block;
// 			width: 100%;
// 			box-sizing: border-box;
// 			border: none;
// 			outline: none;
// 			// @include rounded($borderRadius-public);
// 			-webkit-input-placeholder: red;
// 			height: $fontSize-login_form + $gapSize-public * 8;
// 			// padding: 0 $gapSize-public * 12;
// 			padding: 0 $gapSize-public * 8;
// 			font-size: $fontSize-login_form;
// 			line-height: $fontSize-login_form;
// 			// background-color: darken($bgColor-login_form, 10);
// 			// color: lighten($bgColor-login_form, 38);
// 			color: $bgColor-login_form;
// 			@include transition(all, 0.3s, ease, 0);
// 			// box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.075);
// 			border-bottom: 1px solid #dfdfdf;

// 			&:focus {
// 				// background-color: darken($bgColor-login_form, 15);
// 			}
// 		}

// 		// input[type='text'].user-name {
// 		// }

// 		// input[type='password'].password {
// 		// }
// 	}

// 	&-control-box + &-control-box {
// 		margin-top: $gapSize-public * 2;
// 	}

// 	&-btn-box {
// 		margin-top: $gapSize-public * 8;

// 		.login-btn {
// 			width: 100%;
// 			display: block;
// 			height: $fontSize-login_form + $gapSize-public * 8;
// 			font-size: $fontSize-large;
// 			background-color: $themeColor-primary;
// 		}
// 	}

// 	&-link {
// 		color: lighten($bgColor-login_form, 38);
// 		@include transition(all, 0.3s, ease, 0);
// 		text-decoration: none;

// 		&:hover {
// 			color: lighten($bgColor-login_form, 50);
// 		}

// 		&.left {
// 			float: left;
// 		}

// 		&.right {
// 			float: right;
// 		}
// 	}
// }

// .signup-or-change-password {
// 	margin-top: $gapSize-public * 2;
// 	@include clearfix();
// }
</style>
