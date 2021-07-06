const displayNull = function(value, force) {
	if (value == null || value === '') {
		return '--';
	}
	if (force && value === '0.00') {
		return '--';
	}
	return value;
}

export default displayNull;
