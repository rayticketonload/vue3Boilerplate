import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ command, mode }) => {

	switch (command) {
		case 'serve':
			return defineConfig({
				plugins: [
					vue(),
				]
			})
			break;
		case 'build':
			return defineConfig({
				plugins: [
					vue(),
				]
			})
			break;
		case 'optimize':
			break;
			default:
	}
}
