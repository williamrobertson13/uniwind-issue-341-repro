import { Pressable, Text, View } from 'react-native';

import { copy561 } from '../generated/copy/copy561';
import { layout561 } from '../generated/layouts/layout561';
import { palette561 } from '../generated/palettes/palette561';

export function Screen561() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout561.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy561.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy561.detail} / {palette561.name}
			</Text>
		</View>
	);
}
