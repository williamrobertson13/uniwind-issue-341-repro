import { Pressable, Text, View } from 'react-native';

import { copy1352 } from '../generated/copy/copy1352';
import { layout1352 } from '../generated/layouts/layout1352';
import { palette1352 } from '../generated/palettes/palette1352';

export function Screen1352() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1352.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1352.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1352.detail} / {palette1352.name}
			</Text>
		</View>
	);
}
