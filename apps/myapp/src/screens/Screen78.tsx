import { Text, View, Pressable } from 'react-native';

export function Screen78() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200 m-6" />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-semibold text-gray-700">Screen 78</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-wide">item-78</Text>
		</View>
	);
}
