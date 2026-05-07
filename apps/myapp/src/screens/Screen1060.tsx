import { Pressable, Text, View } from 'react-native';

import { copy1060 } from '../generated/copy/copy1060';
import { layout1060 } from '../generated/layouts/layout1060';
import { palette1060 } from '../generated/palettes/palette1060';

export function Screen1060() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1060.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1060.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1060.detail} / {palette1060.name}
			</Text>
		</View>
	);
}
