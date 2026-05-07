import { Pressable, Text, View } from 'react-native';

import { copy859 } from '../generated/copy/copy859';
import { layout859 } from '../generated/layouts/layout859';
import { palette859 } from '../generated/palettes/palette859';

export function Screen859() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout859.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy859.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy859.detail} / {palette859.name}
			</Text>
		</View>
	);
}
