import { Pressable, Text, View } from 'react-native';

import { copy1364 } from '../generated/copy/copy1364';
import { layout1364 } from '../generated/layouts/layout1364';
import { palette1364 } from '../generated/palettes/palette1364';

export function Screen1364() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1364.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1364.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1364.detail} / {palette1364.name}
			</Text>
		</View>
	);
}
