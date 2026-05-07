import { Pressable, Text, View } from 'react-native';

import { copy814 } from '../generated/copy/copy814';
import { layout814 } from '../generated/layouts/layout814';
import { palette814 } from '../generated/palettes/palette814';

export function Screen814() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout814.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy814.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy814.detail} / {palette814.name}
			</Text>
		</View>
	);
}
