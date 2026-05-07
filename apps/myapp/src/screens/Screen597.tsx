import { Pressable, Text, View } from 'react-native';

import { copy597 } from '../generated/copy/copy597';
import { layout597 } from '../generated/layouts/layout597';
import { palette597 } from '../generated/palettes/palette597';

export function Screen597() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout597.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy597.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy597.detail} / {palette597.name}
			</Text>
		</View>
	);
}
