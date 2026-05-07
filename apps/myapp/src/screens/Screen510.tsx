import { Pressable, Text, View } from 'react-native';

import { copy510 } from '../generated/copy/copy510';
import { layout510 } from '../generated/layouts/layout510';
import { palette510 } from '../generated/palettes/palette510';

export function Screen510() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout510.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy510.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy510.detail} / {palette510.name}
			</Text>
		</View>
	);
}
