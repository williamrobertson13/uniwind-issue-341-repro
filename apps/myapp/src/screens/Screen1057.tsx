import { Pressable, Text, View } from 'react-native';

import { copy1057 } from '../generated/copy/copy1057';
import { layout1057 } from '../generated/layouts/layout1057';
import { palette1057 } from '../generated/palettes/palette1057';

export function Screen1057() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1057.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1057.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1057.detail} / {palette1057.name}
			</Text>
		</View>
	);
}
