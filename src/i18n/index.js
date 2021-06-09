import { createI18n } from 'vue-i18n'
import { LANG_CN_FLAG, LANG_EN_FLAG } from '/@HELPER/global'
import customZhCn from './langs/zh-CN.json';
import customEnUs from './langs/en-US.json';
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
// import enLocale from 'element-ui/lib/locale/lang/en';

const messages = {
	[LANG_CN_FLAG]: {
		...customZhCn,
		// ...zhLocale
	},
	[LANG_EN_FLAG]: {
		...customEnUs,
		// ...enLocale
	},
};

const i18n = createI18n({
	locale: LANG_CN_FLAG,
	messages,
});

export default i18n;
