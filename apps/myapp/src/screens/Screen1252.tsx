import { Pressable, Text, View } from 'react-native';

import { copy1252 } from '../generated/copy/copy1252';
import { layout1252 } from '../generated/layouts/layout1252';
import { palette1252 } from '../generated/palettes/palette1252';

export function Screen1252() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1252.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1252.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1252.detail} / {palette1252.name}
			</Text>
		</View>
	);
}
