import { Pressable, Text, View } from 'react-native';

import { copy299 } from '../generated/copy/copy299';
import { layout299 } from '../generated/layouts/layout299';
import { palette299 } from '../generated/palettes/palette299';

export function Screen299() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout299.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy299.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy299.detail} / {palette299.name}
			</Text>
		</View>
	);
}
