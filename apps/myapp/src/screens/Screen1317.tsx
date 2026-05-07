import { Pressable, Text, View } from 'react-native';

import { copy1317 } from '../generated/copy/copy1317';
import { layout1317 } from '../generated/layouts/layout1317';
import { palette1317 } from '../generated/palettes/palette1317';

export function Screen1317() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1317.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1317.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1317.detail} / {palette1317.name}
			</Text>
		</View>
	);
}
