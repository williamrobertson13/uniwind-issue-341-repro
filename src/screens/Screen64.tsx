import { Text, View, Pressable } from 'react-native';

export function Screen64() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-6400 rounded-lg shadow-md">
			<View className="size-10 bg-blue-500 rounded-full border-2 border-white" />
			<View className="size-12 bg-red-500 rounded-xl rotate-45" />
			<View className="size-8 bg-green-500 rounded-full opacity-75" />
			<Pressable className="px-4 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-white">Screen 64</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline">item-64</Text>
		</View>
	);
}
