const { getDefaultConfig } = require('expo/metro-config');
const { withUniwindConfig } = require('uniwind/metro');

module.exports = (() => {
	/** @type {import('expo/metro-config').MetroConfig} */
	const config = getDefaultConfig(__dirname);

	config.transformer.getTransformOptions = async () => ({
		transform: {
			experimentalImportSupport: false,
		},
	});

	return withUniwindConfig(config, {
		cssEntryFile: './src/styles.css',
		extraThemes: [
			'purple-dark',
			'purple-light',
			'blue-dark',
			'blue-light',
			'orange-dark',
			'orange-light',
			'yellow-dark',
			'yellow-light',
		],
	});
})();
