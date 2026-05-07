import { Text, View, Pressable } from 'react-native';

export function Screen367() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl m-7" />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">Screen 367</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-wider">item-367</Text>
		</View>
	);
}
