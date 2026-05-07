import { Pressable, Text, View } from 'react-native';

import { copy863 } from '../generated/copy/copy863';
import { layout863 } from '../generated/layouts/layout863';
import { palette863 } from '../generated/palettes/palette863';

export function Screen863() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout863.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy863.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy863.detail} / {palette863.name}
			</Text>
		</View>
	);
}
