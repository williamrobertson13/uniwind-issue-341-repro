import { Pressable, Text, View } from 'react-native';

import { copy1131 } from '../generated/copy/copy1131';
import { layout1131 } from '../generated/layouts/layout1131';
import { palette1131 } from '../generated/palettes/palette1131';

export function Screen1131() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1131.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1131.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1131.detail} / {palette1131.name}
			</Text>
		</View>
	);
}
