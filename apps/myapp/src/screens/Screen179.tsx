import { Pressable, Text, View } from 'react-native';

import { copy179 } from '../generated/copy/copy179';
import { layout179 } from '../generated/layouts/layout179';
import { palette179 } from '../generated/palettes/palette179';

export function Screen179() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout179.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy179.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy179.detail} / {palette179.name}
			</Text>
		</View>
	);
}
