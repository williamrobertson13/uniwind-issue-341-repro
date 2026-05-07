import { Pressable, Text, View } from 'react-native';

import { copy993 } from '../generated/copy/copy993';
import { layout993 } from '../generated/layouts/layout993';
import { palette993 } from '../generated/palettes/palette993';

export function Screen993() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout993.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy993.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy993.detail} / {palette993.name}
			</Text>
		</View>
	);
}
