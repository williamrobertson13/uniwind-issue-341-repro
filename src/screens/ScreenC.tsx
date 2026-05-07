import { Text, View } from 'react-native';

export function ScreenC() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg">
			<View className="size-10 bg-blue-500 rounded-full" />
			<View className="size-10 bg-red-500 rounded-full" />
			<View className="size-10 bg-green-500 rounded-full" />
			<Text className="text-base text-gray-900">Screen C</Text>
		</View>
	);
}
