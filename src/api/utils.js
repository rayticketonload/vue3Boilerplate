// 去空格
export function eraseEmpty(obj) {
	const res = {};
	for (const key in obj) {
		if (obj[key] !== '' && obj[key] !== null) {
			res[key] = obj[key];
		}
	}
	return res;
}
