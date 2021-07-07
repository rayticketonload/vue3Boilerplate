import axios from 'axios';
import { i18n } from '@I18N';

export default {
	use() {
		axios.defaults.timeout = 10000;
		axios.defaults.headers.post['Content-Type'] = 'application/json';
		axios.defaults.headers.lang = i18n.global.locale;
	},
};
