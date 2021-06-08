import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import chalk from 'chalk'
import global from '../src/helper/global'

const viteConfig = defineConfig(
	{
		plugins: [
			vue(),
		]
	}
)

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
	console.log(chalk.blueBright.italic('\n' + `  ${warning(`执行`)} ${command} ${warning(`命令`)}${loading}  ` + '\n'));
	console.log(chalk.blueBright.italic(`  ${warning(`运行`)} ${mode} ${warning(`模式`)}${loading}  ` + '\n'));
	console.log(chalk.blueBright.italic(`  ${warning(`运行模式标签`)} ${mode} ${warning(`置换为`)} ${modeAfterResult}${loading}  ` + '\n'));
}

export default ({ command, mode }) => {

	switch (command) {
		case 'serve':
			if (mode === 'development') {
				noteProcess(command, mode, global.ENV_DEV_FLAG);
				viteConfig.mode = global.ENV_DEV_FLAG;
			}

			return viteConfig;
			break;
		case 'build':
			noteProcess(command, mode);
			return viteConfig;
			break;
		case 'optimize':
			break;
			default:
	}
}
