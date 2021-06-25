import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import chalk from 'chalk'
import { resolve } from "path";
import { ENV_DEV_FLAG } from '../src/helper/global'

function pathResolve(dir) {
  return resolve(__dirname, '..', dir);
}

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
			extensions: ['.js', '.vue', '.json'],
			alias: {
				'/@': pathResolve('src'),
				'/@API': resolve('src/api'),
				'/@ROUTER': resolve('src/router'),
				'/@STORE': resolve('src/store'),
				'/@I18N': resolve('src/i18n'),
				'/@HELPER': resolve('src/helper'),
				'/@COMPONENTS': resolve('src/components'),
				'/@VIEWS': resolve('src/views'),
			}
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "src/style/global_style.scss";`
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
