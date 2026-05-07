import { Pressable, Text, View } from 'react-native';

import { copy1251 } from '../generated/copy/copy1251';
import { layout1251 } from '../generated/layouts/layout1251';
import { palette1251 } from '../generated/palettes/palette1251';

export function Screen1251() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1251.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1251.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1251.detail} / {palette1251.name}
			</Text>
		</View>
	);
}
