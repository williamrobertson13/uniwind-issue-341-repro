import { Pressable, Text, View } from 'react-native';

import { copy1013 } from '../generated/copy/copy1013';
import { layout1013 } from '../generated/layouts/layout1013';
import { palette1013 } from '../generated/palettes/palette1013';

export function Screen1013() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout1013.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1013.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1013.detail} / {palette1013.name}
			</Text>
		</View>
	);
}
