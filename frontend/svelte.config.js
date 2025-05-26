import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
export default {
	kit: {
		adapter: adapter({
			fallback: '200.html' // For SPA routing
		})
	},
	preprocess: vitePreprocess()
};
