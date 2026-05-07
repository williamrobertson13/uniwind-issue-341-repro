import { Pressable, Text, View } from 'react-native';

import { copy1203 } from '../generated/copy/copy1203';
import { layout1203 } from '../generated/layouts/layout1203';
import { palette1203 } from '../generated/palettes/palette1203';

export function Screen1203() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1203.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1203.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1203.detail} / {palette1203.name}
			</Text>
		</View>
	);
}
