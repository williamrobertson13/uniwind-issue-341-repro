import { Pressable, Text, View } from 'react-native';

import { copy1084 } from '../generated/copy/copy1084';
import { layout1084 } from '../generated/layouts/layout1084';
import { palette1084 } from '../generated/palettes/palette1084';

export function Screen1084() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1084.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1084.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1084.detail} / {palette1084.name}
			</Text>
		</View>
	);
}
