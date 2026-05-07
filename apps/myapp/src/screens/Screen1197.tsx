import { Pressable, Text, View } from 'react-native';

import { copy1197 } from '../generated/copy/copy1197';
import { layout1197 } from '../generated/layouts/layout1197';
import { palette1197 } from '../generated/palettes/palette1197';

export function Screen1197() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1197.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1197.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1197.detail} / {palette1197.name}
			</Text>
		</View>
	);
}
