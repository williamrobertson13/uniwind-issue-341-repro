import { Pressable, Text, View } from 'react-native';

import { copy418 } from '../generated/copy/copy418';
import { layout418 } from '../generated/layouts/layout418';
import { palette418 } from '../generated/palettes/palette418';

export function Screen418() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout418.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy418.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy418.detail} / {palette418.name}
			</Text>
		</View>
	);
}
