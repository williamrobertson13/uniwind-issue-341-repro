import { Pressable, Text, View } from 'react-native';

import { copy1396 } from '../generated/copy/copy1396';
import { layout1396 } from '../generated/layouts/layout1396';
import { palette1396 } from '../generated/palettes/palette1396';

export function Screen1396() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1396.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1396.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1396.detail} / {palette1396.name}
			</Text>
		</View>
	);
}
