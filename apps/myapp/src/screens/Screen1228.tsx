import { Pressable, Text, View } from 'react-native';

import { copy1228 } from '../generated/copy/copy1228';
import { layout1228 } from '../generated/layouts/layout1228';
import { palette1228 } from '../generated/palettes/palette1228';

export function Screen1228() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1228.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1228.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1228.detail} / {palette1228.name}
			</Text>
		</View>
	);
}
