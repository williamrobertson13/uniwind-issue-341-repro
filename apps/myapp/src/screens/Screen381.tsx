import { Pressable, Text, View } from 'react-native';

import { copy381 } from '../generated/copy/copy381';
import { layout381 } from '../generated/layouts/layout381';
import { palette381 } from '../generated/palettes/palette381';

export function Screen381() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout381.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy381.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy381.detail} / {palette381.name}
			</Text>
		</View>
	);
}
