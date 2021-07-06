import axios from 'axios';

const checkHrefList = ['/api/contract/download/', '/api/contract/view/'];

const setNotifierState = errorMsg => {
	if (errorMsg) {
		// 用UI组件提醒下用户
	}
};

const download = href => {
	const el = document.createElement('A');
	el.href = href;
	document.body.appendChild(el);
	el.click();
	document.body.removeChild(el);
};

const checkHref = async href => {
	try {
		await axios.get(href);
		download(href);
	} catch (error) {
		setNotifierState(error.errorMsg);
	}
};

const checkHrefEffectiveness = {
	name: 'checkHrefEffectiveness',
	mounted: function(el){
		el.addEventListener(
			'click',
			e => {
				const { target } = e;
				if (target.tagName !== 'A') {
					return;
				}
				const { href } = target;

				const checkNeeded = checkHrefList.some(val => {
					return href.indexOf(val) !== -1;
				});
				if (checkNeeded) {
					e.preventDefault();
					target.removeAttribute('download');
					checkHref(href);
				}
			},
			false,
		);
  },
};

export default checkHrefEffectiveness;
