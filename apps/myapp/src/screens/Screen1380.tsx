import { Pressable, Text, View } from 'react-native';

import { copy1380 } from '../generated/copy/copy1380';
import { layout1380 } from '../generated/layouts/layout1380';
import { palette1380 } from '../generated/palettes/palette1380';

export function Screen1380() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1380.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1380.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1380.detail} / {palette1380.name}
			</Text>
		</View>
	);
}
