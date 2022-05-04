module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{css,jsx,js,svg}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};