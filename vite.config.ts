import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				@use '$lib/styles/_variables.scss' as *;
				`
			}
		}
	}
});
