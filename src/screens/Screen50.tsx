import { Text, View, Pressable } from 'react-native';

export function Screen50() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-6 bg-blue-600 rounded-full" />
			<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2 m-2" />
			<Pressable className="px-4 py-3 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-base font-light text-gray-600">Screen 50</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-wide">item-50</Text>
		</View>
	);
}
