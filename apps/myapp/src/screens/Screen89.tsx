import { Text, View, Pressable } from 'react-native';

export function Screen89() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-9 bg-blue-900 rounded-full" />
			<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg m-1" />
			<Pressable className="px-7 py-2 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-bold text-gray-900">Screen 89</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">item-89</Text>
		</View>
	);
}
