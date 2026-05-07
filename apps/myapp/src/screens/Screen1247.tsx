import { Pressable, Text, View } from 'react-native';

import { copy1247 } from '../generated/copy/copy1247';
import { layout1247 } from '../generated/layouts/layout1247';
import { palette1247 } from '../generated/palettes/palette1247';

export function Screen1247() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1247.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1247.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1247.detail} / {palette1247.name}
			</Text>
		</View>
	);
}
