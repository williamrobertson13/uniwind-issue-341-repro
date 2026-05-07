import { Pressable, Text, View } from 'react-native';

import { copy574 } from '../generated/copy/copy574';
import { layout574 } from '../generated/layouts/layout574';
import { palette574 } from '../generated/palettes/palette574';

export function Screen574() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout574.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy574.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy574.detail} / {palette574.name}
			</Text>
		</View>
	);
}
