import { Pressable, Text, View } from 'react-native';

import { copy1384 } from '../generated/copy/copy1384';
import { layout1384 } from '../generated/layouts/layout1384';
import { palette1384 } from '../generated/palettes/palette1384';

export function Screen1384() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1384.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1384.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1384.detail} / {palette1384.name}
			</Text>
		</View>
	);
}
