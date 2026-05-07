import { Pressable, Text, View } from 'react-native';

import { copy803 } from '../generated/copy/copy803';
import { layout803 } from '../generated/layouts/layout803';
import { palette803 } from '../generated/palettes/palette803';

export function Screen803() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout803.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy803.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy803.detail} / {palette803.name}
			</Text>
		</View>
	);
}
