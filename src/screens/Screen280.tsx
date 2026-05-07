import { Text, View, Pressable } from 'react-native';

export function Screen280() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-8 bg-blue-200 rounded-full" />
			<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300 m-0" />
			<Pressable className="px-6 py-1 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-light text-gray-200">Screen 280</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-tight">item-280</Text>
		</View>
	);
}
