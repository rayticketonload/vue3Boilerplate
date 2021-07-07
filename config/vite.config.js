import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import chalk from 'chalk'
// import { ENV_DEV_FLAG } from '../src/helper/global'
// import path from 'path'
// import vueI18n from '@intlify/vite-plugin-vue-i18n'

// 终端运行提示
function noteProcess(command, mode, modeAfter) {
	const loading = chalk.blackBright(`...`);
	const warning = chalk.blackBright;
	let modeAfterResult;
	if (modeAfter) {
		modeAfterResult = modeAfter;
	} else {
		modeAfterResult = `${mode}（没变化）`;
	}
	console.log(chalk.blueBright.italic('\n' + `  ${warning(`执行`)} ${command} ${warning(`类型命令`)}${loading}  ` + '\n'));
	console.log(chalk.blueBright.italic(`  ${warning(`运行`)} ${mode} ${warning(`开发模式`)}${loading}  ` + '\n'));
	console.log(chalk.blueBright.italic(`  ${warning(`开发模式标签`)} ${mode} ${warning(`置换为`)} ${modeAfterResult}${loading}  ` + '\n'));
}

// 接口地图
// 来自服务器1
const DOMAIN_ROOT_MAP_1 = {
	development: 'http://10.10.1.196:8108/',
	stage: 'http://10.10.1.196:8108/',
	production: 'http://10.10.1.196:8108/',
}
// 来自服务器2
const DOMAIN_ROOT_MAP_2 = {
	development: 'https://sx-test.weychain.com:60443/',
	stage: 'https://sx-test.weychain.com:60443/',
	production: 'https://sx-test.weychain.com:60443/',
}

export default ({ command, mode }) => {

	let viteFinalConfig = {};

	// vite默认配置
	const viteDefaultConfig = defineConfig(
		{
			plugins: [
				vue(),
				// vueI18n({
				// 	compositionOnly: false,
				// 	include: path.resolve(__dirname, './path/to/src/locales/**')
				// })
			],
			optimizeDeps: {
				include: ["axios"]
			},
			resolve: {
				// extensions 选项已经有必须的文件类型参数，导入时想要省略的扩展名列表。注意，vite 不建议忽略自定义导入类型的扩展名（例如：.vue），因为它会干扰 IDE 和类型支持。
				// 事实上，就算加了 .vue 也不起作用，除非别名的开头用 '/'，例如 '/@VIEWS'，但这样的开头在 style 类型的解释中又不支持
				alias: [
					{ find: '@PACKAGE', replacement: '/package.json' },
					{ find: '@', replacement: '/src' },
					{ find: '@API', replacement: '/src/api' },
					{ find: '@ROUTER', replacement: '/src/router' },
					{ find: '@STORE', replacement: '/src/store' },
					{ find: '@HELPER', replacement: '/src/helper' },
					{ find: '@VIEWS', replacement: '/src/views' },
					{ find: '@COMPONENTS', replacement: '/src/components' },
					{ find: '@STYLE', replacement: '/src/style' },
					{ find: '@ASSETS', replacement: '/src/assets' },
					{ find: '@I18N', replacement: '/src/i18n' },
				]
			},
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: `@import "@STYLE/global_style";`
					}
				}
			},
		}
	)

	switch (command) {
		case 'serve':

			const viteServeConfig = defineConfig(
				{
					server: {
						cors: true,
						open: true,
						proxy: {
							'/testapi': {
								target: DOMAIN_ROOT_MAP_1[mode],
								changeOrigin: true,
								rewrite: path => path.replace(/^\/testapi/, '')
							},
							'/pms': {
								target: DOMAIN_ROOT_MAP_2[mode],
								changeOrigin: true,
							}
						}
					}
				}
			)
			Object.assign(viteFinalConfig, viteDefaultConfig, viteServeConfig);
			return viteFinalConfig;

		case 'build':
			noteProcess(command, mode);
			return viteDefaultConfig;

		case 'optimize':
			break;
			default:
	}
}
