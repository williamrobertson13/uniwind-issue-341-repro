import { Text, View, Pressable } from 'react-native';

export function Screen386() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-6 bg-blue-900 rounded-full" />
			<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2 m-2" />
			<Pressable className="px-4 py-3 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-normal text-gray-900">Screen 386</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-wide">item-386</Text>
		</View>
	);
}
