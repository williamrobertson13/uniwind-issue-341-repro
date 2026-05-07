import { Pressable, Text, View } from 'react-native';

import { copy1239 } from '../generated/copy/copy1239';
import { layout1239 } from '../generated/layouts/layout1239';
import { palette1239 } from '../generated/palettes/palette1239';

export function Screen1239() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1239.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1239.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1239.detail} / {palette1239.name}
			</Text>
		</View>
	);
}
