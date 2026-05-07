import { Pressable, Text, View } from 'react-native';

import { copy1002 } from '../generated/copy/copy1002';
import { layout1002 } from '../generated/layouts/layout1002';
import { palette1002 } from '../generated/palettes/palette1002';

export function Screen1002() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1002.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1002.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1002.detail} / {palette1002.name}
			</Text>
		</View>
	);
}
