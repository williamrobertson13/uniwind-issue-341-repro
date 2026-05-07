import { Text, View, Pressable } from 'react-native';

export function Screen203() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-15 bg-blue-600 rounded-full" />
			<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90 m-3" />
			<Pressable className="px-7 py-4 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-semibold text-gray-600">Screen 203</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-wider">item-203</Text>
		</View>
	);
}
