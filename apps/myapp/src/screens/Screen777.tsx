import { Pressable, Text, View } from 'react-native';

import { copy777 } from '../generated/copy/copy777';
import { layout777 } from '../generated/layouts/layout777';
import { palette777 } from '../generated/palettes/palette777';

export function Screen777() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout777.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy777.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy777.detail} / {palette777.name}
			</Text>
		</View>
	);
}
