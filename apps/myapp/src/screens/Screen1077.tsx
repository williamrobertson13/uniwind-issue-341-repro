import { Pressable, Text, View } from 'react-native';

import { copy1077 } from '../generated/copy/copy1077';
import { layout1077 } from '../generated/layouts/layout1077';
import { palette1077 } from '../generated/palettes/palette1077';

export function Screen1077() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1077.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1077.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1077.detail} / {palette1077.name}
			</Text>
		</View>
	);
}
