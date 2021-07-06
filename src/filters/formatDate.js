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

const formatDate = function(time, format = 'yyyy/MM/dd') {
	if (!time) {
		return '--';
	}
	const date = new Date(time);
	return _formatDate(date, format);
}

export default formatDate;
