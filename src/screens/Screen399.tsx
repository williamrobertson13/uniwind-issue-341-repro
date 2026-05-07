import { Text, View, Pressable } from 'react-native';

export function Screen399() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl m-7" />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-bold text-gray-400">Screen 399</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-wider">item-399</Text>
		</View>
	);
}
