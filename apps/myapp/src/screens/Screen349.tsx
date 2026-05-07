import { Pressable, Text, View } from 'react-native';

import { copy349 } from '../generated/copy/copy349';
import { layout349 } from '../generated/layouts/layout349';
import { palette349 } from '../generated/palettes/palette349';

export function Screen349() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout349.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy349.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy349.detail} / {palette349.name}
			</Text>
		</View>
	);
}
