import { Pressable, Text, View } from 'react-native';

import { copy731 } from '../generated/copy/copy731';
import { layout731 } from '../generated/layouts/layout731';
import { palette731 } from '../generated/palettes/palette731';

export function Screen731() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout731.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy731.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy731.detail} / {palette731.name}
			</Text>
		</View>
	);
}
