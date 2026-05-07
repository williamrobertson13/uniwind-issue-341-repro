import { Pressable, Text, View } from 'react-native';

import { copy150 } from '../generated/copy/copy150';
import { layout150 } from '../generated/layouts/layout150';
import { palette150 } from '../generated/palettes/palette150';

export function Screen150() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout150.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy150.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy150.detail} / {palette150.name}
			</Text>
		</View>
	);
}
