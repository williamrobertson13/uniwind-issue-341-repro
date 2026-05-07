import { Pressable, Text, View } from 'react-native';

import { copy801 } from '../generated/copy/copy801';
import { layout801 } from '../generated/layouts/layout801';
import { palette801 } from '../generated/palettes/palette801';

export function Screen801() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout801.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy801.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy801.detail} / {palette801.name}
			</Text>
		</View>
	);
}
