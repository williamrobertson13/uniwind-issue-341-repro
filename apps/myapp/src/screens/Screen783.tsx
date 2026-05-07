import { Pressable, Text, View } from 'react-native';

import { copy783 } from '../generated/copy/copy783';
import { layout783 } from '../generated/layouts/layout783';
import { palette783 } from '../generated/palettes/palette783';

export function Screen783() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout783.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy783.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy783.detail} / {palette783.name}
			</Text>
		</View>
	);
}
