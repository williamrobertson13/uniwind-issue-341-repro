import { Pressable, Text, View } from 'react-native';

import { copy1293 } from '../generated/copy/copy1293';
import { layout1293 } from '../generated/layouts/layout1293';
import { palette1293 } from '../generated/palettes/palette1293';

export function Screen1293() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1293.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1293.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1293.detail} / {palette1293.name}
			</Text>
		</View>
	);
}
