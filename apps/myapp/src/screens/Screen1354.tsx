import { Pressable, Text, View } from 'react-native';

import { copy1354 } from '../generated/copy/copy1354';
import { layout1354 } from '../generated/layouts/layout1354';
import { palette1354 } from '../generated/palettes/palette1354';

export function Screen1354() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1354.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1354.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1354.detail} / {palette1354.name}
			</Text>
		</View>
	);
}
