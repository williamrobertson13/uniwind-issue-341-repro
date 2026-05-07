import { Pressable, Text, View } from 'react-native';

import { copy1399 } from '../generated/copy/copy1399';
import { layout1399 } from '../generated/layouts/layout1399';
import { palette1399 } from '../generated/palettes/palette1399';

export function Screen1399() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1399.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1399.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1399.detail} / {palette1399.name}
			</Text>
		</View>
	);
}
