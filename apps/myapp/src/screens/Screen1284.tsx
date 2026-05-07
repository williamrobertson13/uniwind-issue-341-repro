import { Pressable, Text, View } from 'react-native';

import { copy1284 } from '../generated/copy/copy1284';
import { layout1284 } from '../generated/layouts/layout1284';
import { palette1284 } from '../generated/palettes/palette1284';

export function Screen1284() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1284.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1284.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1284.detail} / {palette1284.name}
			</Text>
		</View>
	);
}
