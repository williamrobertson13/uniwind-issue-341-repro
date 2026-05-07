import { Pressable, Text, View } from 'react-native';

import { copy1155 } from '../generated/copy/copy1155';
import { layout1155 } from '../generated/layouts/layout1155';
import { palette1155 } from '../generated/palettes/palette1155';

export function Screen1155() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1155.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1155.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1155.detail} / {palette1155.name}
			</Text>
		</View>
	);
}
