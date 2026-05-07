import { Text, View, Pressable } from 'react-native';

export function Screen118() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-14 bg-blue-200 rounded-full" />
			<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200 m-6" />
			<Pressable className="px-6 py-3 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-semibold text-gray-200">Screen 118</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-wide">item-118</Text>
		</View>
	);
}
