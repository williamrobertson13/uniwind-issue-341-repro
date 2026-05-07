import { Pressable, Text, View } from 'react-native';

import { copy1012 } from '../generated/copy/copy1012';
import { layout1012 } from '../generated/layouts/layout1012';
import { palette1012 } from '../generated/palettes/palette1012';

export function Screen1012() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1012.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1012.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1012.detail} / {palette1012.name}
			</Text>
		</View>
	);
}
