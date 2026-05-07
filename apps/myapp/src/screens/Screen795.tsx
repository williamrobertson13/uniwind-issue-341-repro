import { Pressable, Text, View } from 'react-native';

import { copy795 } from '../generated/copy/copy795';
import { layout795 } from '../generated/layouts/layout795';
import { palette795 } from '../generated/palettes/palette795';

export function Screen795() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout795.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy795.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy795.detail} / {palette795.name}
			</Text>
		</View>
	);
}
