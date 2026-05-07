import { Pressable, Text, View } from 'react-native';

import { copy1071 } from '../generated/copy/copy1071';
import { layout1071 } from '../generated/layouts/layout1071';
import { palette1071 } from '../generated/palettes/palette1071';

export function Screen1071() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1071.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1071.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1071.detail} / {palette1071.name}
			</Text>
		</View>
	);
}
