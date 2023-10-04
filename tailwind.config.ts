import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

export default {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		typography,
		forms,
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton({
			themes: {
				preset: [{ name: 'wintry', enhancements: true },
				{ name: 'skeleton', enhancements: true },
				{ name: 'crimson', enhancements: true },
				{ name: 'seafoam', enhancements: true },]
			}
		})
	]
} satisfies Config;
