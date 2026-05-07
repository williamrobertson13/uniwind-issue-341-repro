import { Pressable, Text, View } from 'react-native';

import { copy851 } from '../generated/copy/copy851';
import { layout851 } from '../generated/layouts/layout851';
import { palette851 } from '../generated/palettes/palette851';

export function Screen851() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout851.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy851.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy851.detail} / {palette851.name}
			</Text>
		</View>
	);
}
