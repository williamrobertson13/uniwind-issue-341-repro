import { Pressable, Text, View } from 'react-native';

import { copy1137 } from '../generated/copy/copy1137';
import { layout1137 } from '../generated/layouts/layout1137';
import { palette1137 } from '../generated/palettes/palette1137';

export function Screen1137() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1137.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1137.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1137.detail} / {palette1137.name}
			</Text>
		</View>
	);
}
