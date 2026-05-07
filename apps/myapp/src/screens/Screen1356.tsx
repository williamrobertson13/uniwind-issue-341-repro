import { Pressable, Text, View } from 'react-native';

import { copy1356 } from '../generated/copy/copy1356';
import { layout1356 } from '../generated/layouts/layout1356';
import { palette1356 } from '../generated/palettes/palette1356';

export function Screen1356() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1356.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1356.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1356.detail} / {palette1356.name}
			</Text>
		</View>
	);
}
