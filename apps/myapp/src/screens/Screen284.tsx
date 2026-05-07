import { Pressable, Text, View } from 'react-native';

import { copy284 } from '../generated/copy/copy284';
import { layout284 } from '../generated/layouts/layout284';
import { palette284 } from '../generated/palettes/palette284';

export function Screen284() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout284.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy284.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy284.detail} / {palette284.name}
			</Text>
		</View>
	);
}
