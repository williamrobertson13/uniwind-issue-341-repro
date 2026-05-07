import { Text, View, Pressable } from 'react-native';

export function Screen383() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-15 bg-blue-600 rounded-full" />
			<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl m-7" />
			<Pressable className="px-7 py-4 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-semibold text-gray-600">Screen 383</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-wider">item-383</Text>
		</View>
	);
}
