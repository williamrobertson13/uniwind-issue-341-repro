import { Pressable, Text, View } from 'react-native';

import { copy121 } from '../generated/copy/copy121';
import { layout121 } from '../generated/layouts/layout121';
import { palette121 } from '../generated/palettes/palette121';

export function Screen121() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout121.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy121.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy121.detail} / {palette121.name}
			</Text>
		</View>
	);
}
