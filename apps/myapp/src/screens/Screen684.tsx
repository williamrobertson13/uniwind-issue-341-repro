import { Pressable, Text, View } from 'react-native';

import { copy684 } from '../generated/copy/copy684';
import { layout684 } from '../generated/layouts/layout684';
import { palette684 } from '../generated/palettes/palette684';

export function Screen684() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout684.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy684.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy684.detail} / {palette684.name}
			</Text>
		</View>
	);
}
