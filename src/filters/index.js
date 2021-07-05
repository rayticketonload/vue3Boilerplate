function padLeftZero(str) {
	return ('00' + str).substr(str.length);
}

function _formatDate(date, fmt) {
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	const o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds(),
	};
	for (const k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			const str = o[k] + '';
			fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
		}
	}
	return fmt;
}

const install = function(app) {

	// 加币种符号，格式化千分位
	app.config.globalProperties.$currency = function(value, prefix) {
		if (value == null) {
			return '--';
		}
		let val = (value / 1).toFixed(2).replace(',', '.');
		val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		return prefix ? `${prefix} ${val}` : val;
	}

	// 时间戳转日期格式
	app.config.globalProperties.$formatDate = function(time, format = 'yyyy/MM/dd') {
		if (!time) {
			return '--';
		}
		const date = new Date(time);
		return _formatDate(date, format);
	}

	// 日期格式转时间戳
	app.config.globalProperties.$formatDateTimestamp = function(time) {
		if (!time) {
			return '';
		}
		const date = new Date(time);
		return date.getTime();
	}

	// 数据状态码转换
	app.config.globalProperties.$code2text = function(n, statusArr) {
		if (!statusArr) {
			return '没有传入状态表';
		}

		let isNum = false;
		statusArr.some(item => {
			if (typeof item.code === 'number') {
				isNum = true;
			}
		});

		let statusCode;
		if (isNum) {
			statusCode = n;
		} else {
			statusCode = n.toString();
		}

		let statuslabel = '';
		statusArr.map(item => {
			switch (item.code) {
				case statusCode:
					statuslabel = item.label;
					break;
				default:
			}
		});
		return statuslabel;
	}

	// 格式化百分比
	app.config.globalProperties.$percentage = function(value, decimals) {
		if (value == null) {
			return '--';
		}
		if (!decimals) {
			decimals = 2;
		}
		value = value * 100;
		return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals) + '%';
	}

	// 截断文字
	app.config.globalProperties.$truncate = function(str, length, unfold) {
		const postfix = '...';

		let ret = '';
		if (unfold) {
			return str;
		}

		if (str) {
			const len = str.length;
			for (let i = 0; i < len; i++) {
				const charCode = str.charCodeAt(i);
				ret += str.charAt(i);

				length -= 1;
				if (charCode > 255) {
					length -= 1;
				}

				if (length <= 3) {
					ret += postfix;
					break;
				}
			}

			return ret;
		} else {
			return '';
		}
	}

	// 空数据格式化
	app.config.globalProperties.$displayNull = function(value, force) {
		if (value == null || value === '') {
			return '--';
		}
		if (force && value === '0.00') {
			return '--';
		}
		return value;
	}

};

export default {
	install,
};
