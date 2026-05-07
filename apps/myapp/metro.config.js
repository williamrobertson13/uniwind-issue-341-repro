const { getSentryExpoConfig } = require('@sentry/react-native/metro');
const { withUniwindConfig } = require('uniwind/metro');

const packagesNeedingExports = ['uniwind', 'culori'];

module.exports = (() => {
	/** @type {import('expo/metro-config').MetroConfig} */
	const config = getSentryExpoConfig(__dirname);

	// Force high worker count to widen the race window for uniwind#341
	config.maxWorkers = 8;

	config.resolver.sourceExts.push('sql');
	config.resolver.assetExts.push('woff2');
	config.resolver.assetExts.push('lottie');
	config.resolver.platforms.push('web');
	config.resolver.unstable_enablePackageExports = false;

	config.transformer.babelTransformerPath = require.resolve('./metro.transform');

	config.transformer.getTransformOptions = async () => ({
		transform: {
			experimentalImportSupport: true,
			inlineRequires: process.env.EXPO_UNSTABLE_TREE_SHAKING === '1',
		},
	});

	config.resolver = {
		...config.resolver,
		resolveRequest: (context, moduleName, platform) => {
			if (
				packagesNeedingExports.some((pkg) => moduleName === pkg || moduleName.startsWith(`${pkg}/`))
			) {
				const newContext = { ...context, unstable_enablePackageExports: true };
				return context.resolveRequest(newContext, moduleName, platform);
			}

			return context.resolveRequest(context, moduleName, platform);
		},
	};

	if (process.env.REPRO_EXTENSION_MODE === 'true') {
		config.resolver.platforms.push('extension');
		config.resolver.sourceExts = [
			...config.resolver.sourceExts.map((ext) => `extension.${ext}`),
			...config.resolver.sourceExts,
		];
	}

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
