import { Text, View, Pressable } from 'react-native';

export function Screen192() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-4 bg-blue-400 rounded-full" />
			<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300 m-0" />
			<Pressable className="px-2 py-1 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-medium text-gray-400">Screen 192</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-tight">item-192</Text>
		</View>
	);
}
