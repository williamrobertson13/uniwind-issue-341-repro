import { Pressable, Text, View } from 'react-native';

import { copy1121 } from '../generated/copy/copy1121';
import { layout1121 } from '../generated/layouts/layout1121';
import { palette1121 } from '../generated/palettes/palette1121';

export function Screen1121() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout1121.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1121.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1121.detail} / {palette1121.name}
			</Text>
		</View>
	);
}
