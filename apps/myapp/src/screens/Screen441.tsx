import { Pressable, Text, View } from 'react-native';

import { copy441 } from '../generated/copy/copy441';
import { layout441 } from '../generated/layouts/layout441';
import { palette441 } from '../generated/palettes/palette441';

export function Screen441() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout441.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy441.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy441.detail} / {palette441.name}
			</Text>
		</View>
	);
}
