import { Pressable, Text, View } from 'react-native';

import { copy1269 } from '../generated/copy/copy1269';
import { layout1269 } from '../generated/layouts/layout1269';
import { palette1269 } from '../generated/palettes/palette1269';

export function Screen1269() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1269.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1269.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1269.detail} / {palette1269.name}
			</Text>
		</View>
	);
}
