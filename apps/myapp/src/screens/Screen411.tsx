import { Pressable, Text, View } from 'react-native';

import { copy411 } from '../generated/copy/copy411';
import { layout411 } from '../generated/layouts/layout411';
import { palette411 } from '../generated/palettes/palette411';

export function Screen411() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout411.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy411.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy411.detail} / {palette411.name}
			</Text>
		</View>
	);
}
