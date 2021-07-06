const formatDateTimestamp = function(time) {
	if (!time) {
		return '';
	}
	const date = new Date(time);
	return date.getTime();
};

export default formatDateTimestamp;
