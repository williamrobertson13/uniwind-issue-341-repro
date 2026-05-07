import { Pressable, Text, View } from 'react-native';

import { copy1381 } from '../generated/copy/copy1381';
import { layout1381 } from '../generated/layouts/layout1381';
import { palette1381 } from '../generated/palettes/palette1381';

export function Screen1381() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1381.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1381.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1381.detail} / {palette1381.name}
			</Text>
		</View>
	);
}
