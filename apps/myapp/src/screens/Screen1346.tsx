import { Pressable, Text, View } from 'react-native';

import { copy1346 } from '../generated/copy/copy1346';
import { layout1346 } from '../generated/layouts/layout1346';
import { palette1346 } from '../generated/palettes/palette1346';

export function Screen1346() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1346.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1346.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1346.detail} / {palette1346.name}
			</Text>
		</View>
	);
}
