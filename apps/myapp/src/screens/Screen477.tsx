import { Pressable, Text, View } from 'react-native';

import { copy477 } from '../generated/copy/copy477';
import { layout477 } from '../generated/layouts/layout477';
import { palette477 } from '../generated/palettes/palette477';

export function Screen477() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout477.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy477.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy477.detail} / {palette477.name}
			</Text>
		</View>
	);
}
