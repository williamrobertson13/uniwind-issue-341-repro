import { Pressable, Text, View } from 'react-native';

import { copy1335 } from '../generated/copy/copy1335';
import { layout1335 } from '../generated/layouts/layout1335';
import { palette1335 } from '../generated/palettes/palette1335';

export function Screen1335() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1335.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1335.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1335.detail} / {palette1335.name}
			</Text>
		</View>
	);
}
