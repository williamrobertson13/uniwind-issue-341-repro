import { Pressable, Text, View } from 'react-native';

import { copy1120 } from '../generated/copy/copy1120';
import { layout1120 } from '../generated/layouts/layout1120';
import { palette1120 } from '../generated/palettes/palette1120';

export function Screen1120() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1120.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1120.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1120.detail} / {palette1120.name}
			</Text>
		</View>
	);
}
