const percentage = function(value, decimals) {
	if (value == null) {
		return '--';
	}
	if (!decimals) {
		decimals = 2;
	}
	value = value * 100;
	return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals) + '%';
};

export default percentage;
