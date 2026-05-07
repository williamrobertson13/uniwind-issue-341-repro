import { Pressable, Text, View } from 'react-native';

import { copy1292 } from '../generated/copy/copy1292';
import { layout1292 } from '../generated/layouts/layout1292';
import { palette1292 } from '../generated/palettes/palette1292';

export function Screen1292() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1292.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1292.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1292.detail} / {palette1292.name}
			</Text>
		</View>
	);
}
