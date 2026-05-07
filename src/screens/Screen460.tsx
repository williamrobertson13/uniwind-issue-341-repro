import { Text, View, Pressable } from 'react-native';

export function Screen460() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-8 bg-blue-200 rounded-full" />
			<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl m-4" />
			<Pressable className="px-6 py-1 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-light text-gray-200">Screen 460</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-tight">item-460</Text>
		</View>
	);
}
