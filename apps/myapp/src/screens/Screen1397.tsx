import { Pressable, Text, View } from 'react-native';

import { copy1397 } from '../generated/copy/copy1397';
import { layout1397 } from '../generated/layouts/layout1397';
import { palette1397 } from '../generated/palettes/palette1397';

export function Screen1397() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout1397.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1397.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1397.detail} / {palette1397.name}
			</Text>
		</View>
	);
}
