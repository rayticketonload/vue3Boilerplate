const truncate = function(str, length, unfold) {
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

export default truncate;
