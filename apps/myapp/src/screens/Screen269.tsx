import { Pressable, Text, View } from 'react-native';

import { copy269 } from '../generated/copy/copy269';
import { layout269 } from '../generated/layouts/layout269';
import { palette269 } from '../generated/palettes/palette269';

export function Screen269() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout269.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy269.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy269.detail} / {palette269.name}
			</Text>
		</View>
	);
}
