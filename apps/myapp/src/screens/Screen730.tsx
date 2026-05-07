import { Pressable, Text, View } from 'react-native';

import { copy730 } from '../generated/copy/copy730';
import { layout730 } from '../generated/layouts/layout730';
import { palette730 } from '../generated/palettes/palette730';

export function Screen730() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout730.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy730.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy730.detail} / {palette730.name}
			</Text>
		</View>
	);
}
