import { Text, View, Pressable } from 'react-native';

export function Screen372() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-4 bg-blue-400 rounded-full" />
			<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl m-4" />
			<Pressable className="px-2 py-1 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-medium text-gray-400">Screen 372</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-tight">item-372</Text>
		</View>
	);
}
