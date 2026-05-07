import { Pressable, Text, View } from 'react-native';

import { copy1333 } from '../generated/copy/copy1333';
import { layout1333 } from '../generated/layouts/layout1333';
import { palette1333 } from '../generated/palettes/palette1333';

export function Screen1333() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1333.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1333.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1333.detail} / {palette1333.name}
			</Text>
		</View>
	);
}
