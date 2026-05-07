import { Pressable, Text, View } from 'react-native';

import { copy124 } from '../generated/copy/copy124';
import { layout124 } from '../generated/layouts/layout124';
import { palette124 } from '../generated/palettes/palette124';

export function Screen124() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout124.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy124.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy124.detail} / {palette124.name}
			</Text>
		</View>
	);
}
