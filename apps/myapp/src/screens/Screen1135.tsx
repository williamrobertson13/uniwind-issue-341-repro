import { Pressable, Text, View } from 'react-native';

import { copy1135 } from '../generated/copy/copy1135';
import { layout1135 } from '../generated/layouts/layout1135';
import { palette1135 } from '../generated/palettes/palette1135';

export function Screen1135() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1135.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1135.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1135.detail} / {palette1135.name}
			</Text>
		</View>
	);
}
