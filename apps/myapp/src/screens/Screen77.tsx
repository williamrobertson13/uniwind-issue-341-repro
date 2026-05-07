import { Text, View, Pressable } from 'react-native';

export function Screen77() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md m-5" />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-medium text-gray-600">Screen 77</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">item-77</Text>
		</View>
	);
}
