import integer from './integer';
import decimals from './decimals';
import checkHrefEffectiveness from './checkHrefEffectiveness';
import autoStretch from './autoStretch';

const directives = [
	decimals,
	integer,
	checkHrefEffectiveness,
	autoStretch,
]

const install = function(app) {
	directives.map(item => {
		app.directive(item.name, item);
	})
};

export default {
	install,
};

