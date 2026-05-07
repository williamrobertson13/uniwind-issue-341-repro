import { Pressable, Text, View } from 'react-native';

import { copy1180 } from '../generated/copy/copy1180';
import { layout1180 } from '../generated/layouts/layout1180';
import { palette1180 } from '../generated/palettes/palette1180';

export function Screen1180() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1180.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1180.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1180.detail} / {palette1180.name}
			</Text>
		</View>
	);
}
