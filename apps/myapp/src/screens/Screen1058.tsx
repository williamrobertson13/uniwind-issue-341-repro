import { Pressable, Text, View } from 'react-native';

import { copy1058 } from '../generated/copy/copy1058';
import { layout1058 } from '../generated/layouts/layout1058';
import { palette1058 } from '../generated/palettes/palette1058';

export function Screen1058() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1058.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1058.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1058.detail} / {palette1058.name}
			</Text>
		</View>
	);
}
