import { Pressable, Text, View } from 'react-native';

import { copy1377 } from '../generated/copy/copy1377';
import { layout1377 } from '../generated/layouts/layout1377';
import { palette1377 } from '../generated/palettes/palette1377';

export function Screen1377() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1377.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1377.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1377.detail} / {palette1377.name}
			</Text>
		</View>
	);
}
