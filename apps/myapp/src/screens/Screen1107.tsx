import { Pressable, Text, View } from 'react-native';

import { copy1107 } from '../generated/copy/copy1107';
import { layout1107 } from '../generated/layouts/layout1107';
import { palette1107 } from '../generated/palettes/palette1107';

export function Screen1107() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1107.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1107.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1107.detail} / {palette1107.name}
			</Text>
		</View>
	);
}
