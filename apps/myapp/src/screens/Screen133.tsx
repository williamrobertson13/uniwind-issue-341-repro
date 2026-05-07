import { Text, View, Pressable } from 'react-native';

export function Screen133() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-5 bg-blue-800 rounded-full" />
			<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md m-5" />
			<Pressable className="px-3 py-2 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-semibold text-gray-800">Screen 133</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">item-133</Text>
		</View>
	);
}
