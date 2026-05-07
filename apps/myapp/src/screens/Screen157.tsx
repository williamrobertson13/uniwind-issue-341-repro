import { Text, View, Pressable } from 'react-native';

export function Screen157() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-5 bg-blue-500 rounded-full" />
			<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md m-5" />
			<Pressable className="px-3 py-2 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-500">Screen 157</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">item-157</Text>
		</View>
	);
}
