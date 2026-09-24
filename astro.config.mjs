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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/BonzerKitten/1e308' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
