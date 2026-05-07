import { Pressable, Text, View } from 'react-native';

import { copy123 } from '../generated/copy/copy123';
import { layout123 } from '../generated/layouts/layout123';
import { palette123 } from '../generated/palettes/palette123';

export function Screen123() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout123.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy123.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy123.detail} / {palette123.name}
			</Text>
		</View>
	);
}
