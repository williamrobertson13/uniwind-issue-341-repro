import { Text, View, Pressable } from 'react-native';

export function Screen49() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-5 bg-blue-500 rounded-full" />
			<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg m-1" />
			<Pressable className="px-3 py-2 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-bold text-gray-500">Screen 49</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">item-49</Text>
		</View>
	);
}
