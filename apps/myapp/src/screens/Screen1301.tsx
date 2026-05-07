import { Pressable, Text, View } from 'react-native';

import { copy1301 } from '../generated/copy/copy1301';
import { layout1301 } from '../generated/layouts/layout1301';
import { palette1301 } from '../generated/palettes/palette1301';

export function Screen1301() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout1301.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1301.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1301.detail} / {palette1301.name}
			</Text>
		</View>
	);
}
