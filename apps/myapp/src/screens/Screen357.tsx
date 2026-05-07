import { Pressable, Text, View } from 'react-native';

import { copy357 } from '../generated/copy/copy357';
import { layout357 } from '../generated/layouts/layout357';
import { palette357 } from '../generated/palettes/palette357';

export function Screen357() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout357.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy357.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy357.detail} / {palette357.name}
			</Text>
		</View>
	);
}
