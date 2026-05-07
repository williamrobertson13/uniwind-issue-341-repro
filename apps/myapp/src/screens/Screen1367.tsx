import { Pressable, Text, View } from 'react-native';

import { copy1367 } from '../generated/copy/copy1367';
import { layout1367 } from '../generated/layouts/layout1367';
import { palette1367 } from '../generated/palettes/palette1367';

export function Screen1367() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1367.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1367.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1367.detail} / {palette1367.name}
			</Text>
		</View>
	);
}
