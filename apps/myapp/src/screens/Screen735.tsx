import { Pressable, Text, View } from 'react-native';

import { copy735 } from '../generated/copy/copy735';
import { layout735 } from '../generated/layouts/layout735';
import { palette735 } from '../generated/palettes/palette735';

export function Screen735() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout735.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy735.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy735.detail} / {palette735.name}
			</Text>
		</View>
	);
}
