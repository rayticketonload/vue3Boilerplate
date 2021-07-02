import { createI18n } from 'vue-i18n'
import PACKAGE from '@PACKAGE';
import customZhCn from './langs/zh-CN.json';
import customEnUs from './langs/en-US.json';
import enLocale from 'element-plus/lib/locale/lang/en';
import zhLocale from 'element-plus/lib/locale/lang/zh-cn';

// Language flag name
export const LANG_CN_FLAG = `zh_CN`; // 简体中文
export const LANG_EN_FLAG = `en_US`; // 美式英语

// 语言 storage key name
export const LANG_COOKIE_KEY = `${PACKAGE.name}_${process.env.NODE_ENV}_LANG`;

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

const LANGS = [
	LANG_CN_FLAG,
	LANG_EN_FLAG
];

function setLocaleLang() {
	const storageLocalLang = localStorage.getItem(LANG_COOKIE_KEY);
	let local_lang = LANG_CN_FLAG;
	if (storageLocalLang) {
		LANGS.some(item => {
			if (storageLocalLang === item) {
				local_lang = storageLocalLang;
			}
		})
	}
	localStorage.setItem(LANG_COOKIE_KEY, local_lang);
	return local_lang
};

export const i18n = createI18n({
	locale: setLocaleLang(),
	fallbackLocale: LANG_EN_FLAG,
	messages
});
