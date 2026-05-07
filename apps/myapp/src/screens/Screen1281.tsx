import { Pressable, Text, View } from 'react-native';

import { copy1281 } from '../generated/copy/copy1281';
import { layout1281 } from '../generated/layouts/layout1281';
import { palette1281 } from '../generated/palettes/palette1281';

export function Screen1281() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1281.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1281.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1281.detail} / {palette1281.name}
			</Text>
		</View>
	);
}
