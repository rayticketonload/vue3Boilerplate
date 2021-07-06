import currency from './currency';
import formatDate from './formatDate';
import formatDateTimestamp from './formatDateTimestamp';
import code2text from './code2text';
import percentage from './percentage';
import truncate from './truncate';
import displayNull from './displayNull';

const install = function(app) {

	// 加币种符号，格式化千分位
	app.config.globalProperties.$currency = currency;

	// 时间戳转日期格式
	app.config.globalProperties.$formatDate = formatDate;

	// 日期格式转时间戳
	app.config.globalProperties.$formatDateTimestamp = formatDateTimestamp;

	// 数据状态码转换
	app.config.globalProperties.$code2text = code2text;

	// 格式化百分比
	app.config.globalProperties.$percentage = percentage;

	// 截断文字
	app.config.globalProperties.$truncate = truncate;

	// 空数据格式化
	app.config.globalProperties.$displayNull = displayNull;

};

export default {
	install,
};
