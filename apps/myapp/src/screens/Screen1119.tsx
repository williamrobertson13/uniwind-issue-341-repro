import { Pressable, Text, View } from 'react-native';

import { copy1119 } from '../generated/copy/copy1119';
import { layout1119 } from '../generated/layouts/layout1119';
import { palette1119 } from '../generated/palettes/palette1119';

export function Screen1119() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1119.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1119.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1119.detail} / {palette1119.name}
			</Text>
		</View>
	);
}
