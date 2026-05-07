import { Pressable, Text, View } from 'react-native';

import { copy1226 } from '../generated/copy/copy1226';
import { layout1226 } from '../generated/layouts/layout1226';
import { palette1226 } from '../generated/palettes/palette1226';

export function Screen1226() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1226.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1226.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1226.detail} / {palette1226.name}
			</Text>
		</View>
	);
}
