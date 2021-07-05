import langSelect from '@COMPONENTS/langSelect/index.vue';

const components = [
	langSelect,
];

const install = function(app) {
	if (install.installed) return;
	components.map(component => {
		app.component(component.name, component);
	});
};

export default {
	install,
};
