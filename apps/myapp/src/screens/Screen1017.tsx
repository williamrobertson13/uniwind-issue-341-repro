import { Pressable, Text, View } from 'react-native';

import { copy1017 } from '../generated/copy/copy1017';
import { layout1017 } from '../generated/layouts/layout1017';
import { palette1017 } from '../generated/palettes/palette1017';

export function Screen1017() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1017.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1017.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1017.detail} / {palette1017.name}
			</Text>
		</View>
	);
}
