import { Pressable, Text, View } from 'react-native';

import { copy1101 } from '../generated/copy/copy1101';
import { layout1101 } from '../generated/layouts/layout1101';
import { palette1101 } from '../generated/palettes/palette1101';

export function Screen1101() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1101.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1101.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1101.detail} / {palette1101.name}
			</Text>
		</View>
	);
}
