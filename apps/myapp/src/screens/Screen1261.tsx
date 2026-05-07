import { Pressable, Text, View } from 'react-native';

import { copy1261 } from '../generated/copy/copy1261';
import { layout1261 } from '../generated/layouts/layout1261';
import { palette1261 } from '../generated/palettes/palette1261';

export function Screen1261() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1261.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1261.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1261.detail} / {palette1261.name}
			</Text>
		</View>
	);
}
