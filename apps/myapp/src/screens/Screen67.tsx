import { Pressable, Text, View } from 'react-native';

import { copy67 } from '../generated/copy/copy67';
import { layout67 } from '../generated/layouts/layout67';
import { palette67 } from '../generated/palettes/palette67';

export function Screen67() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout67.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy67.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy67.detail} / {palette67.name}
			</Text>
		</View>
	);
}
