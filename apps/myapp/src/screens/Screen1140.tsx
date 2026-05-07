import { Pressable, Text, View } from 'react-native';

import { copy1140 } from '../generated/copy/copy1140';
import { layout1140 } from '../generated/layouts/layout1140';
import { palette1140 } from '../generated/palettes/palette1140';

export function Screen1140() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1140.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1140.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1140.detail} / {palette1140.name}
			</Text>
		</View>
	);
}
