import { Pressable, Text, View } from 'react-native';

import { copy1248 } from '../generated/copy/copy1248';
import { layout1248 } from '../generated/layouts/layout1248';
import { palette1248 } from '../generated/palettes/palette1248';

export function Screen1248() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1248.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1248.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1248.detail} / {palette1248.name}
			</Text>
		</View>
	);
}
