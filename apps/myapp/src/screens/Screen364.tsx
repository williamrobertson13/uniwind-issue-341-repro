import { Pressable, Text, View } from 'react-native';

import { copy364 } from '../generated/copy/copy364';
import { layout364 } from '../generated/layouts/layout364';
import { palette364 } from '../generated/palettes/palette364';

export function Screen364() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout364.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy364.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy364.detail} / {palette364.name}
			</Text>
		</View>
	);
}
