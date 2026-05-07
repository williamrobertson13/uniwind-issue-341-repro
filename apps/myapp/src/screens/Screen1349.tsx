import { Pressable, Text, View } from 'react-native';

import { copy1349 } from '../generated/copy/copy1349';
import { layout1349 } from '../generated/layouts/layout1349';
import { palette1349 } from '../generated/palettes/palette1349';

export function Screen1349() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout1349.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1349.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1349.detail} / {palette1349.name}
			</Text>
		</View>
	);
}
