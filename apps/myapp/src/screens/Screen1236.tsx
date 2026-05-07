import { Pressable, Text, View } from 'react-native';

import { copy1236 } from '../generated/copy/copy1236';
import { layout1236 } from '../generated/layouts/layout1236';
import { palette1236 } from '../generated/palettes/palette1236';

export function Screen1236() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1236.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1236.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1236.detail} / {palette1236.name}
			</Text>
		</View>
	);
}
