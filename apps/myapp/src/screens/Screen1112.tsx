import { Pressable, Text, View } from 'react-native';

import { copy1112 } from '../generated/copy/copy1112';
import { layout1112 } from '../generated/layouts/layout1112';
import { palette1112 } from '../generated/palettes/palette1112';

export function Screen1112() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1112.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1112.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1112.detail} / {palette1112.name}
			</Text>
		</View>
	);
}
