import { Pressable, Text, View } from 'react-native';

import { copy1276 } from '../generated/copy/copy1276';
import { layout1276 } from '../generated/layouts/layout1276';
import { palette1276 } from '../generated/palettes/palette1276';

export function Screen1276() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1276.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1276.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1276.detail} / {palette1276.name}
			</Text>
		</View>
	);
}
