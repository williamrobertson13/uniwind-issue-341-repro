import { Pressable, Text, View } from 'react-native';

import { copy1392 } from '../generated/copy/copy1392';
import { layout1392 } from '../generated/layouts/layout1392';
import { palette1392 } from '../generated/palettes/palette1392';

export function Screen1392() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1392.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1392.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1392.detail} / {palette1392.name}
			</Text>
		</View>
	);
}
