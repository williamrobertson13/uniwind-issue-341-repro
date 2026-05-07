import { Pressable, Text, View } from 'react-native';

import { copy1300 } from '../generated/copy/copy1300';
import { layout1300 } from '../generated/layouts/layout1300';
import { palette1300 } from '../generated/palettes/palette1300';

export function Screen1300() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1300.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1300.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1300.detail} / {palette1300.name}
			</Text>
		</View>
	);
}
