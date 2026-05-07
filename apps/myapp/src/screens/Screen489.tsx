import { Pressable, Text, View } from 'react-native';

import { copy489 } from '../generated/copy/copy489';
import { layout489 } from '../generated/layouts/layout489';
import { palette489 } from '../generated/palettes/palette489';

export function Screen489() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout489.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy489.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy489.detail} / {palette489.name}
			</Text>
		</View>
	);
}
