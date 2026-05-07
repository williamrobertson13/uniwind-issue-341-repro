import { Text, View, Pressable } from 'react-native';

export function Screen191() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-15 bg-blue-300 rounded-full" />
			<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl m-7" />
			<Pressable className="px-7 py-4 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-normal text-gray-300">Screen 191</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-wider">item-191</Text>
		</View>
	);
}
