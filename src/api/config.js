import axios from 'axios';
import { LANG_CN_FLAG } from '/@HELPER/global';

export default {
	use() {
		axios.defaults.timeout = 10000;
		axios.defaults.headers.post['Content-Type'] = 'application/json';
		axios.defaults.headers.lang = LANG_CN_FLAG;
	},
};
