import { Pressable, Text, View } from 'react-native';

import { copy787 } from '../generated/copy/copy787';
import { layout787 } from '../generated/layouts/layout787';
import { palette787 } from '../generated/palettes/palette787';

export function Screen787() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout787.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy787.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy787.detail} / {palette787.name}
			</Text>
		</View>
	);
}
