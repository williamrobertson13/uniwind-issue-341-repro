import { Pressable, Text, View } from 'react-native';

import { copy1041 } from '../generated/copy/copy1041';
import { layout1041 } from '../generated/layouts/layout1041';
import { palette1041 } from '../generated/palettes/palette1041';

export function Screen1041() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1041.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1041.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1041.detail} / {palette1041.name}
			</Text>
		</View>
	);
}
