import { Text, View, Pressable } from 'react-native';

export function Screen175() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-11 bg-blue-500 rounded-full" />
			<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl m-7" />
			<Pressable className="px-3 py-4 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-light text-gray-500">Screen 175</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-wider">item-175</Text>
		</View>
	);
}
