import { Pressable, Text, View } from 'react-native';

import { copy1389 } from '../generated/copy/copy1389';
import { layout1389 } from '../generated/layouts/layout1389';
import { palette1389 } from '../generated/palettes/palette1389';

export function Screen1389() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1389.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1389.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1389.detail} / {palette1389.name}
			</Text>
		</View>
	);
}
