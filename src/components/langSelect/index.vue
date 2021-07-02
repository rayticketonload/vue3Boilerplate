<template>
	<div class="langSelecter">
		<el-dropdown @command="handleCommand">
		<span class="el-dropdown-link">
			{{ currentLangTag($i18n.locale) }}<i class="el-icon-arrow-down el-icon--right"></i>
		</span>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item v-for="(item, index) in langOptions" :command="item.code">
					{{ item.label }}
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
	</div>
</template>

<script>
import { LANG_CN_FLAG, LANG_EN_FLAG, LANG_COOKIE_KEY } from '@I18N';

export default {
	name: 'langSelect',

	data() {
		return {
			langOptions: [],
		};
	},

	created() {
		this.setLangOptions();
	},

	methods: {
		setLangOptions() {
			this.langOptions = [
				{
					code: LANG_CN_FLAG,
					label: this.$t('jian-ti-zhong-wen'),
				},
				{
					code: LANG_EN_FLAG,
					label: this.$t('mei-shi-ying-wen'),
				}
			]
		},

		currentLangTag(lang) {
			let result = '';
			this.langOptions.some(item => {
				if (item.code === lang) {
					result = item.label;
				}
			});
			return result;
		},

		handleCommand(command) {
			this.$i18n.locale = command;
			localStorage.setItem(LANG_COOKIE_KEY, command);
			this.setLangOptions();
		}
	},
};
</script>

<style lang="scss" scoped>
.langSelecter {
	padding: $gapSize-public * 2;
	display: inline-block;
	vertical-align: middle;
	box-shadow: 0 0 0 1px $borderColor-primary;
	@include rounded($borderRadius-public);
}
</style>
