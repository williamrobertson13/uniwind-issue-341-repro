import { Pressable, Text, View } from 'react-native';

import { copy345 } from '../generated/copy/copy345';
import { layout345 } from '../generated/layouts/layout345';
import { palette345 } from '../generated/palettes/palette345';

export function Screen345() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout345.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy345.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy345.detail} / {palette345.name}
			</Text>
		</View>
	);
}
