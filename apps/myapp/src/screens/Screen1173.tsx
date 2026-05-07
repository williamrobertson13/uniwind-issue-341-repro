import { Pressable, Text, View } from 'react-native';

import { copy1173 } from '../generated/copy/copy1173';
import { layout1173 } from '../generated/layouts/layout1173';
import { palette1173 } from '../generated/palettes/palette1173';

export function Screen1173() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1173.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1173.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1173.detail} / {palette1173.name}
			</Text>
		</View>
	);
}
