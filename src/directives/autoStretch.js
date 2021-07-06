const autoStretch = {
	name: 'autoStretch',
	mounted: function(el){
		let lastLength = 0;
		let lastHeight = 0;

		el.addEventListener('input', () => {
			const currentLength = el.value.length;
			if (currentLength < lastLength) {
				el.style.height = '';
			}

			const currentHeight = el.scrollHeight;

			if (lastHeight !== currentHeight || !el.style.height) {
				el.style.height = `${currentHeight + 2}px`;
			}

			lastLength = currentLength;
			lastHeight = currentHeight;
		});
  },
};

export default autoStretch;

