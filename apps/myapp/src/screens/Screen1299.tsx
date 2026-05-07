import { Pressable, Text, View } from 'react-native';

import { copy1299 } from '../generated/copy/copy1299';
import { layout1299 } from '../generated/layouts/layout1299';
import { palette1299 } from '../generated/palettes/palette1299';

export function Screen1299() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1299.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1299.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1299.detail} / {palette1299.name}
			</Text>
		</View>
	);
}
