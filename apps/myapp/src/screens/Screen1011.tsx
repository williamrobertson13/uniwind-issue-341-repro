import { Pressable, Text, View } from 'react-native';

import { copy1011 } from '../generated/copy/copy1011';
import { layout1011 } from '../generated/layouts/layout1011';
import { palette1011 } from '../generated/palettes/palette1011';

export function Screen1011() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1011.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1011.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1011.detail} / {palette1011.name}
			</Text>
		</View>
	);
}
