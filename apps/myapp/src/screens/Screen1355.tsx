import { Pressable, Text, View } from 'react-native';

import { copy1355 } from '../generated/copy/copy1355';
import { layout1355 } from '../generated/layouts/layout1355';
import { palette1355 } from '../generated/palettes/palette1355';

export function Screen1355() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1355.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1355.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1355.detail} / {palette1355.name}
			</Text>
		</View>
	);
}
