import { Pressable, Text, View } from 'react-native';

import { copy1124 } from '../generated/copy/copy1124';
import { layout1124 } from '../generated/layouts/layout1124';
import { palette1124 } from '../generated/palettes/palette1124';

export function Screen1124() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1124.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1124.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1124.detail} / {palette1124.name}
			</Text>
		</View>
	);
}
