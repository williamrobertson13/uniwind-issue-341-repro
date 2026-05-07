import { Pressable, Text, View } from 'react-native';

import { copy1341 } from '../generated/copy/copy1341';
import { layout1341 } from '../generated/layouts/layout1341';
import { palette1341 } from '../generated/palettes/palette1341';

export function Screen1341() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1341.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1341.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1341.detail} / {palette1341.name}
			</Text>
		</View>
	);
}
