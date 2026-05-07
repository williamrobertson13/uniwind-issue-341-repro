import { Pressable, Text, View } from 'react-native';

import { copy1246 } from '../generated/copy/copy1246';
import { layout1246 } from '../generated/layouts/layout1246';
import { palette1246 } from '../generated/palettes/palette1246';

export function Screen1246() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1246.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1246.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1246.detail} / {palette1246.name}
			</Text>
		</View>
	);
}
