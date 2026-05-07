import { Pressable, Text, View } from 'react-native';

import { copy211 } from '../generated/copy/copy211';
import { layout211 } from '../generated/layouts/layout211';
import { palette211 } from '../generated/palettes/palette211';

export function Screen211() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout211.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy211.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy211.detail} / {palette211.name}
			</Text>
		</View>
	);
}
