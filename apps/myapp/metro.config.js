const { getDefaultConfig } = require('expo/metro-config');
const { withUniwindConfig } = require('uniwind/metro');

module.exports = (() => {
	/** @type {import('expo/metro-config').MetroConfig} */
	const config = getDefaultConfig(__dirname);

	// Force high worker count to widen the race window for uniwind#341
	config.maxWorkers = 8;

	config.transformer.getTransformOptions = async () => ({
		transform: {
			experimentalImportSupport: true,
			inlineRequires: process.env.EXPO_UNSTABLE_TREE_SHAKING === '1',
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
