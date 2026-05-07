import { Pressable, Text, View } from 'react-native';

import { copy17 } from '../generated/copy/copy17';
import { layout17 } from '../generated/layouts/layout17';
import { palette17 } from '../generated/palettes/palette17';

export function Screen17() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout17.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy17.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy17.detail} / {palette17.name}
			</Text>
		</View>
	);
}
