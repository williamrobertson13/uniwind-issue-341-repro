import { Pressable, Text, View } from 'react-native';

import { copy273 } from '../generated/copy/copy273';
import { layout273 } from '../generated/layouts/layout273';
import { palette273 } from '../generated/palettes/palette273';

export function Screen273() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout273.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy273.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy273.detail} / {palette273.name}
			</Text>
		</View>
	);
}
