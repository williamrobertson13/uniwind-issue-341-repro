import { Pressable, Text, View } from 'react-native';

import { copy1235 } from '../generated/copy/copy1235';
import { layout1235 } from '../generated/layouts/layout1235';
import { palette1235 } from '../generated/palettes/palette1235';

export function Screen1235() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1235.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1235.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1235.detail} / {palette1235.name}
			</Text>
		</View>
	);
}
