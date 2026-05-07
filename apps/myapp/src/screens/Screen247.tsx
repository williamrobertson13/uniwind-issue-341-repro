import { Pressable, Text, View } from 'react-native';

import { copy247 } from '../generated/copy/copy247';
import { layout247 } from '../generated/layouts/layout247';
import { palette247 } from '../generated/palettes/palette247';

export function Screen247() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout247.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy247.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy247.detail} / {palette247.name}
			</Text>
		</View>
	);
}
