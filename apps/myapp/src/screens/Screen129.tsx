import { Pressable, Text, View } from 'react-native';

import { copy129 } from '../generated/copy/copy129';
import { layout129 } from '../generated/layouts/layout129';
import { palette129 } from '../generated/palettes/palette129';

export function Screen129() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout129.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy129.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy129.detail} / {palette129.name}
			</Text>
		</View>
	);
}
