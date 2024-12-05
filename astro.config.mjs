// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://0xwrpj.github.io/0xwrpj.github.io/',
  	base: '/0xwrpj.github.io/',
	integrations: [react()],
});
