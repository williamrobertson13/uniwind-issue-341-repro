import { Pressable, Text, View } from 'react-native';

import { copy1280 } from '../generated/copy/copy1280';
import { layout1280 } from '../generated/layouts/layout1280';
import { palette1280 } from '../generated/palettes/palette1280';

export function Screen1280() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1280.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1280.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1280.detail} / {palette1280.name}
			</Text>
		</View>
	);
}
