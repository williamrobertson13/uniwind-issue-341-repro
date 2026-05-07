import { Pressable, Text, View } from 'react-native';

import { copy245 } from '../generated/copy/copy245';
import { layout245 } from '../generated/layouts/layout245';
import { palette245 } from '../generated/palettes/palette245';

export function Screen245() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout245.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy245.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy245.detail} / {palette245.name}
			</Text>
		</View>
	);
}
