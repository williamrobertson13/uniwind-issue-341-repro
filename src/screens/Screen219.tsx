import { Text, View, Pressable } from 'react-native';

export function Screen219() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90 m-3" />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-bold text-gray-400">Screen 219</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-wider">item-219</Text>
		</View>
	);
}
