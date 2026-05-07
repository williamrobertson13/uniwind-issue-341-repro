import { Pressable, Text, View } from 'react-native';

import { copy1309 } from '../generated/copy/copy1309';
import { layout1309 } from '../generated/layouts/layout1309';
import { palette1309 } from '../generated/palettes/palette1309';

export function Screen1309() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1309.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1309.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1309.detail} / {palette1309.name}
			</Text>
		</View>
	);
}
