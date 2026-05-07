import { Pressable, Text, View } from 'react-native';

import { copy442 } from '../generated/copy/copy442';
import { layout442 } from '../generated/layouts/layout442';
import { palette442 } from '../generated/palettes/palette442';

export function Screen442() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout442.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy442.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy442.detail} / {palette442.name}
			</Text>
		</View>
	);
}
