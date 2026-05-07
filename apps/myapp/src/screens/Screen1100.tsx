import { Pressable, Text, View } from 'react-native';

import { copy1100 } from '../generated/copy/copy1100';
import { layout1100 } from '../generated/layouts/layout1100';
import { palette1100 } from '../generated/palettes/palette1100';

export function Screen1100() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1100.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1100.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1100.detail} / {palette1100.name}
			</Text>
		</View>
	);
}
