import { Pressable, Text, View } from 'react-native';

import { copy1195 } from '../generated/copy/copy1195';
import { layout1195 } from '../generated/layouts/layout1195';
import { palette1195 } from '../generated/palettes/palette1195';

export function Screen1195() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1195.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1195.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1195.detail} / {palette1195.name}
			</Text>
		</View>
	);
}
