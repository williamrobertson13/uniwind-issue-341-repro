import { Pressable, Text, View } from 'react-native';

import { copy28 } from '../generated/copy/copy28';
import { layout28 } from '../generated/layouts/layout28';
import { palette28 } from '../generated/palettes/palette28';

export function Screen28() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout28.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy28.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy28.detail} / {palette28.name}
			</Text>
		</View>
	);
}
