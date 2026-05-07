import { Pressable, Text, View } from 'react-native';

import { copy802 } from '../generated/copy/copy802';
import { layout802 } from '../generated/layouts/layout802';
import { palette802 } from '../generated/palettes/palette802';

export function Screen802() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout802.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy802.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy802.detail} / {palette802.name}
			</Text>
		</View>
	);
}
