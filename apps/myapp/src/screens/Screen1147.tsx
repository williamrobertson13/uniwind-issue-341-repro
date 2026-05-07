import { Pressable, Text, View } from 'react-native';

import { copy1147 } from '../generated/copy/copy1147';
import { layout1147 } from '../generated/layouts/layout1147';
import { palette1147 } from '../generated/palettes/palette1147';

export function Screen1147() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1147.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1147.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1147.detail} / {palette1147.name}
			</Text>
		</View>
	);
}
