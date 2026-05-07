import { Text, View, Pressable } from 'react-native';

export function Screen310() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-14 bg-blue-500 rounded-full" />
			<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200 m-6" />
			<Pressable className="px-6 py-3 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-light text-gray-500">Screen 310</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-wide">item-310</Text>
		</View>
	);
}
