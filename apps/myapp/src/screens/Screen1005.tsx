import { Pressable, Text, View } from 'react-native';

import { copy1005 } from '../generated/copy/copy1005';
import { layout1005 } from '../generated/layouts/layout1005';
import { palette1005 } from '../generated/palettes/palette1005';

export function Screen1005() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1005.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1005.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1005.detail} / {palette1005.name}
			</Text>
		</View>
	);
}
