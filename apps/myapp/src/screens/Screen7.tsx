import { Pressable, Text, View } from 'react-native';

import { copy7 } from '../generated/copy/copy7';
import { layout7 } from '../generated/layouts/layout7';
import { palette7 } from '../generated/palettes/palette7';

export function Screen7() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout7.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy7.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy7.detail} / {palette7.name}
			</Text>
		</View>
	);
}
