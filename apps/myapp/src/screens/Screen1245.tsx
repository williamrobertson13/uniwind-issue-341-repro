import { Pressable, Text, View } from 'react-native';

import { copy1245 } from '../generated/copy/copy1245';
import { layout1245 } from '../generated/layouts/layout1245';
import { palette1245 } from '../generated/palettes/palette1245';

export function Screen1245() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1245.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1245.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1245.detail} / {palette1245.name}
			</Text>
		</View>
	);
}
