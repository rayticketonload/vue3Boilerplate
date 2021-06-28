import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import chalk from 'chalk'
import { ENV_DEV_FLAG } from '../src/helper/global'

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

const viteDefaultConfig = defineConfig(
	{
		plugins: [
			vue(),
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
				{ find: '@I18N', replacement: '/src/i18n' },
				{ find: '@HELPER', replacement: '/src/helper' },
      	{ find: '@VIEWS', replacement: '/src/views' },
				{ find: '@STYLE', replacement: '/src/style' },
				{ find: '@ASSETS', replacement: '/src/assets' },
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


export default ({ command, mode }) => {

	let viteFinalConfig = {};

	switch (command) {
		case 'serve':
			if (mode === 'development') {
				noteProcess(command, mode, ENV_DEV_FLAG);
				const viteServeDevConfig = defineConfig(
					{
						mode: ENV_DEV_FLAG,
						server: {
							cors: true,
          		open: true,
							proxy: {
								'/testapi': {
									target: 'http://10.10.1.196:8108/',
									changeOrigin: true,
									rewrite: path => path.replace(/^\/testapi/, '')
								},
								'/pms': {
									target: 'https://sx-test.weychain.com:60443/',
									changeOrigin: true,
								}
							}
						}
					}
				)
				Object.assign(viteFinalConfig, viteDefaultConfig, viteServeDevConfig);
			}
			return viteFinalConfig;
		case 'build':
			noteProcess(command, mode);
			return viteDefaultConfig;
		case 'optimize':
			break;
			default:
	}
}
