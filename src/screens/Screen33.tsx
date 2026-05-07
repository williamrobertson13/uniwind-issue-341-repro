import { Text, View, Pressable } from 'react-native';

export function Screen33() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-13 bg-blue-700 rounded-full" />
			<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg m-1" />
			<Pressable className="px-5 py-2 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-700">Screen 33</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">item-33</Text>
		</View>
	);
}
