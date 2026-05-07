import { Pressable, Text, View } from 'react-native';

import { copy513 } from '../generated/copy/copy513';
import { layout513 } from '../generated/layouts/layout513';
import { palette513 } from '../generated/palettes/palette513';

export function Screen513() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout513.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy513.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy513.detail} / {palette513.name}
			</Text>
		</View>
	);
}
