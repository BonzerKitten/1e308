// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://bonzerkitten.github.io',
	base: '/1e308',
	integrations: [
		starlight({
			title: '1e308',
			description: 'Notes, resources and tips for anyone who makes or plays incremental games.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/BonzerKitten/1e308' }],
			// Show each page's last commit date so readers can tell how fresh lists like bundle counts are.
			lastUpdated: true,
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Design',
					items: [{ autogenerate: { directory: 'design' } }],
				},
				{
					label: 'Development',
					items: [{ autogenerate: { directory: 'development' } }],
				},
				{
					label: 'Resources',
					items: [{ autogenerate: { directory: 'resources' } }],
				},
			],
		}),
	],
});
