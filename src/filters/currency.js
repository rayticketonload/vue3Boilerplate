const currency = function(value, prefix) {
	if (value == null) {
		return '--';
	}
	let val = (value / 1).toFixed(2).replace(',', '.');
	val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return prefix ? `${prefix} ${val}` : val;
};

export default currency;
