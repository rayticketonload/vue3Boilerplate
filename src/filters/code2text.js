const code2text = function(n, statusArr) {
	if (!statusArr) {
		return 'no status list';
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

export default code2text;
