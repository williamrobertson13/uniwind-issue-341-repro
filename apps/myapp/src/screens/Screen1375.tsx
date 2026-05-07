import { Pressable, Text, View } from 'react-native';

import { copy1375 } from '../generated/copy/copy1375';
import { layout1375 } from '../generated/layouts/layout1375';
import { palette1375 } from '../generated/palettes/palette1375';

export function Screen1375() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1375.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1375.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1375.detail} / {palette1375.name}
			</Text>
		</View>
	);
}
