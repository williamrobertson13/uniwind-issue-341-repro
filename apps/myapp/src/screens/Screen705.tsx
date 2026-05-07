import { Pressable, Text, View } from 'react-native';

import { copy705 } from '../generated/copy/copy705';
import { layout705 } from '../generated/layouts/layout705';
import { palette705 } from '../generated/palettes/palette705';

export function Screen705() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout705.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy705.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy705.detail} / {palette705.name}
			</Text>
		</View>
	);
}
