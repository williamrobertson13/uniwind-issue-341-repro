import { Pressable, Text, View } from 'react-native';

import { copy1291 } from '../generated/copy/copy1291';
import { layout1291 } from '../generated/layouts/layout1291';
import { palette1291 } from '../generated/palettes/palette1291';

export function Screen1291() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1291.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1291.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1291.detail} / {palette1291.name}
			</Text>
		</View>
	);
}
