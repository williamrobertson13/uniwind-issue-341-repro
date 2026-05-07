import { Pressable, Text, View } from 'react-native';

import { copy309 } from '../generated/copy/copy309';
import { layout309 } from '../generated/layouts/layout309';
import { palette309 } from '../generated/palettes/palette309';

export function Screen309() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout309.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy309.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy309.detail} / {palette309.name}
			</Text>
		</View>
	);
}
