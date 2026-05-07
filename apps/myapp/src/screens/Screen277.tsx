import { Pressable, Text, View } from 'react-native';

import { copy277 } from '../generated/copy/copy277';
import { layout277 } from '../generated/layouts/layout277';
import { palette277 } from '../generated/palettes/palette277';

export function Screen277() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout277.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy277.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy277.detail} / {palette277.name}
			</Text>
		</View>
	);
}
