import { Pressable, Text, View } from 'react-native';

import { copy706 } from '../generated/copy/copy706';
import { layout706 } from '../generated/layouts/layout706';
import { palette706 } from '../generated/palettes/palette706';

export function Screen706() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout706.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy706.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy706.detail} / {palette706.name}
			</Text>
		</View>
	);
}
