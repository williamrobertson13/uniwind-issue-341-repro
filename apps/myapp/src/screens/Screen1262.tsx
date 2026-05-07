import { Pressable, Text, View } from 'react-native';

import { copy1262 } from '../generated/copy/copy1262';
import { layout1262 } from '../generated/layouts/layout1262';
import { palette1262 } from '../generated/palettes/palette1262';

export function Screen1262() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1262.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1262.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1262.detail} / {palette1262.name}
			</Text>
		</View>
	);
}
