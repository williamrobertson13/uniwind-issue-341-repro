import { Pressable, Text, View } from 'react-native';

import { copy644 } from '../generated/copy/copy644';
import { layout644 } from '../generated/layouts/layout644';
import { palette644 } from '../generated/palettes/palette644';

export function Screen644() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout644.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy644.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy644.detail} / {palette644.name}
			</Text>
		</View>
	);
}
