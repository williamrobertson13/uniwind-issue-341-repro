import { Pressable, Text, View } from 'react-native';

import { copy463 } from '../generated/copy/copy463';
import { layout463 } from '../generated/layouts/layout463';
import { palette463 } from '../generated/palettes/palette463';

export function Screen463() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout463.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy463.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy463.detail} / {palette463.name}
			</Text>
		</View>
	);
}
