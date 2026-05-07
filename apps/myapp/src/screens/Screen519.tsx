import { Pressable, Text, View } from 'react-native';

import { copy519 } from '../generated/copy/copy519';
import { layout519 } from '../generated/layouts/layout519';
import { palette519 } from '../generated/palettes/palette519';

export function Screen519() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout519.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy519.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy519.detail} / {palette519.name}
			</Text>
		</View>
	);
}
