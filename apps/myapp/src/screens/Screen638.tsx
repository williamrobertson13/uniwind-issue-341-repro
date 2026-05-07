import { Pressable, Text, View } from 'react-native';

import { copy638 } from '../generated/copy/copy638';
import { layout638 } from '../generated/layouts/layout638';
import { palette638 } from '../generated/palettes/palette638';

export function Screen638() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout638.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy638.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy638.detail} / {palette638.name}
			</Text>
		</View>
	);
}
