import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

export default ts.config(
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		rules: {
			// Disable problematic rules for SvelteKit
			"no-undef": "off", // TypeScript handles this
			"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		// Ignore generated files
		ignores: [
			'build/',
			'.svelte-kit/',
			'dist/',
			'node_modules/'
		]
	}
);