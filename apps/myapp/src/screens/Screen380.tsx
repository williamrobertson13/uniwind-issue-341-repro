import { Text, View, Pressable } from 'react-native';

export function Screen380() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-12 bg-blue-300 rounded-full" />
			<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl m-4" />
			<Pressable className="px-4 py-1 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-light text-gray-300">Screen 380</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-tight">item-380</Text>
		</View>
	);
}
