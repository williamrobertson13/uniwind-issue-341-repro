import { Pressable, Text, View } from 'react-native';

import { copy627 } from '../generated/copy/copy627';
import { layout627 } from '../generated/layouts/layout627';
import { palette627 } from '../generated/palettes/palette627';

export function Screen627() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout627.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy627.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy627.detail} / {palette627.name}
			</Text>
		</View>
	);
}
