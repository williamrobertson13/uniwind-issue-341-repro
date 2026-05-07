import { Pressable, Text, View } from 'react-native';

import { copy429 } from '../generated/copy/copy429';
import { layout429 } from '../generated/layouts/layout429';
import { palette429 } from '../generated/palettes/palette429';

export function Screen429() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout429.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy429.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy429.detail} / {palette429.name}
			</Text>
		</View>
	);
}
