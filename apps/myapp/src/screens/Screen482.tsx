import { Pressable, Text, View } from 'react-native';

import { copy482 } from '../generated/copy/copy482';
import { layout482 } from '../generated/layouts/layout482';
import { palette482 } from '../generated/palettes/palette482';

export function Screen482() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout482.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy482.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy482.detail} / {palette482.name}
			</Text>
		</View>
	);
}
