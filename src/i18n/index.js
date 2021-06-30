import { createI18n } from 'vue-i18n'
import { LANG_CN_FLAG, LANG_EN_FLAG, LANG_COOKIE_KEY } from '@HELPER/global'
import customZhCn from './langs/zh-CN.json';
import customEnUs from './langs/en-US.json';
import enLocale from 'element-plus/lib/locale/lang/en'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'

const messages = {
	[LANG_CN_FLAG]: {
		el: zhLocale.el,
		...customZhCn,
		...zhLocale
	},
	[LANG_EN_FLAG]: {
		el: enLocale.el,
		...customEnUs,
		...enLocale
	},
};

const Langs = [
	LANG_CN_FLAG,
	LANG_EN_FLAG,
]

function setLocaleLang() {
	const storageLocalLang = localStorage.getItem(LANG_COOKIE_KEY);
	let local_lang = LANG_CN_FLAG;
	if (storageLocalLang) {
		Langs.some(item => {
			if (storageLocalLang === item) {
				local_lang = storageLocalLang;
			}
		})
	}
	localStorage.setItem(LANG_COOKIE_KEY, local_lang);
	return local_lang
}

const i18n = createI18n({
	locale: setLocaleLang(),
	fallbackLocale: LANG_EN_FLAG,
	messages,
});

export default i18n;
