import { Pressable, Text, View } from 'react-native';

import { copy1161 } from '../generated/copy/copy1161';
import { layout1161 } from '../generated/layouts/layout1161';
import { palette1161 } from '../generated/palettes/palette1161';

export function Screen1161() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1161.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1161.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1161.detail} / {palette1161.name}
			</Text>
		</View>
	);
}
