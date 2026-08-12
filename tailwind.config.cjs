const { join } = require('path');
const { skeleton } = require('@skeletonlabs/tw-plugin');

const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	darkMode: 'class',
	plugins: [
		require('@tailwindcss/forms'),
		skeleton({
			themes: { 
				custom: [
					{
						name: 'mineraculous',
						enhancements: true,
						properties: {
							"color-primary-50": "252 232 234",
							"color-primary-100": "248 209 214",
							"color-primary-200": "241 162 173",
							"color-primary-300": "235 116 131",
							"color-primary-400": "228 69 90",
							"color-primary-500": "221 23 49",
							"color-primary-600": "177 18 39",
							"color-primary-700": "133 14 29",
							"color-primary-800": "88 9 20",
							"color-primary-900": "44 5 10",
							"color-secondary-50": "249 254 230",
							"color-secondary-100": "244 254 204",
							"color-secondary-200": "232 252 153",
							"color-secondary-300": "221 251 102",
							"color-secondary-400": "209 249 51",
							"color-secondary-500": "198 248 0",
							"color-secondary-600": "158 198 0",
							"color-secondary-700": "119 149 0",
							"color-secondary-800": "79 99 0",
							"color-secondary-900": "40 50 0",
							"color-tertiary-50": "240 232 245",
							"color-tertiary-100": "224 210 235",
							"color-tertiary-200": "193 165 215",
							"color-tertiary-300": "162 119 194",
							"color-tertiary-400": "131 74 174",
							"color-tertiary-500": "100 29 154",
							"color-tertiary-600": "80 23 123",
							"color-tertiary-700": "60 17 92",
							"color-tertiary-800": "40 12 62",
							"color-tertiary-900": "20 6 31",
							"color-surface-50": "255 255 255",
							"color-surface-100": "241 245 249",
							"color-surface-200": "226 232 240",
							"color-surface-300": "203 213 225",
							"color-surface-400": "148 163 184",
							"color-surface-500": "100 116 139",
							"color-surface-600": "71 85 105",
							"color-surface-700": "51 65 85",
							"color-surface-800": "30 41 59",
							"color-surface-900": "15 23 42",
							"color-success-50": "243 250 232",
							"color-success-100": "230 245 208",
							"color-success-200": "206 235 162",
							"color-success-300": "181 224 115",
							"color-success-400": "157 214 69",
							"color-success-500": "132 204 22",
							"color-success-600": "106 163 18",
							"color-success-700": "79 122 13",
							"color-success-800": "53 82 9",
							"color-success-900": "26 41 4",
							"color-warning-50": "253 242 231",
							"color-warning-100": "251 228 207",
							"color-warning-200": "247 201 159",
							"color-warning-300": "244 175 110",
							"color-warning-400": "240 148 62",
							"color-warning-500": "236 121 14",
							"color-warning-600": "189 97 11",
							"color-warning-700": "142 73 8",
							"color-warning-800": "94 48 6",
							"color-warning-900": "47 24 3",
							"color-error-50": "252 231 234",
							"color-error-100": "248 207 214",
							"color-error-200": "242 158 172",
							"color-error-300": "235 110 131",
							"color-error-400": "229 61 89",
							"color-error-500": "222 13 48",
							"color-error-600": "178 10 38",
							"color-error-700": "133 8 29",
							"color-error-800": "89 5 19",
							"color-error-900": "44 3 10",
						}
					}
				]
			}
		})
	]
};

module.exports = config;
