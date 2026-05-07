import { Pressable, Text, View } from 'react-native';

import { copy1308 } from '../generated/copy/copy1308';
import { layout1308 } from '../generated/layouts/layout1308';
import { palette1308 } from '../generated/palettes/palette1308';

export function Screen1308() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1308.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1308.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1308.detail} / {palette1308.name}
			</Text>
		</View>
	);
}
