import { Pressable, Text, View } from 'react-native';

import { copy811 } from '../generated/copy/copy811';
import { layout811 } from '../generated/layouts/layout811';
import { palette811 } from '../generated/palettes/palette811';

export function Screen811() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout811.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy811.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy811.detail} / {palette811.name}
			</Text>
		</View>
	);
}
