const { transform: defaultTransform } = require('@expo/metro-config/babel-transformer');

module.exports.transform = async function transform(args) {
	return await defaultTransform(args);
};
