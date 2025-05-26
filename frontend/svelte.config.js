import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
	kit: {
		adapter: adapter({
			fallback: '200.html' // For SPA routing
		})
	},
	preprocess: vitePreprocess()
};
