import config from './config';
import interceptor from './interceptor';

config.use();
interceptor.use();

import test from './path/test';
import user from './path/user';

export default {
	test,
	user,
};
