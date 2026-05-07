import { Pressable, Text, View } from 'react-native';

import { copy547 } from '../generated/copy/copy547';
import { layout547 } from '../generated/layouts/layout547';
import { palette547 } from '../generated/palettes/palette547';

export function Screen547() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout547.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy547.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy547.detail} / {palette547.name}
			</Text>
		</View>
	);
}
