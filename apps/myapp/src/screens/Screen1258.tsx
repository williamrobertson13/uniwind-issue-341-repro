import { Pressable, Text, View } from 'react-native';

import { copy1258 } from '../generated/copy/copy1258';
import { layout1258 } from '../generated/layouts/layout1258';
import { palette1258 } from '../generated/palettes/palette1258';

export function Screen1258() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1258.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1258.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1258.detail} / {palette1258.name}
			</Text>
		</View>
	);
}
