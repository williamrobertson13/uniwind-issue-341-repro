import { Pressable, Text, View } from 'react-native';

import { copy75 } from '../generated/copy/copy75';
import { layout75 } from '../generated/layouts/layout75';
import { palette75 } from '../generated/palettes/palette75';

export function Screen75() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout75.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy75.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy75.detail} / {palette75.name}
			</Text>
		</View>
	);
}
