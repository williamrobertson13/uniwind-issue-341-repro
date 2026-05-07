import { Pressable, Text, View } from 'react-native';

import { copy754 } from '../generated/copy/copy754';
import { layout754 } from '../generated/layouts/layout754';
import { palette754 } from '../generated/palettes/palette754';

export function Screen754() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout754.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy754.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy754.detail} / {palette754.name}
			</Text>
		</View>
	);
}
