import { Pressable, Text, View } from 'react-native';

import { copy842 } from '../generated/copy/copy842';
import { layout842 } from '../generated/layouts/layout842';
import { palette842 } from '../generated/palettes/palette842';

export function Screen842() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout842.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy842.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy842.detail} / {palette842.name}
			</Text>
		</View>
	);
}
