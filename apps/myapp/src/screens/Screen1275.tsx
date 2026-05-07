import { Pressable, Text, View } from 'react-native';

import { copy1275 } from '../generated/copy/copy1275';
import { layout1275 } from '../generated/layouts/layout1275';
import { palette1275 } from '../generated/palettes/palette1275';

export function Screen1275() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1275.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1275.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1275.detail} / {palette1275.name}
			</Text>
		</View>
	);
}
