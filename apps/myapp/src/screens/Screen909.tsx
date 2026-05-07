import { Pressable, Text, View } from 'react-native';

import { copy909 } from '../generated/copy/copy909';
import { layout909 } from '../generated/layouts/layout909';
import { palette909 } from '../generated/palettes/palette909';

export function Screen909() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout909.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy909.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy909.detail} / {palette909.name}
			</Text>
		</View>
	);
}
