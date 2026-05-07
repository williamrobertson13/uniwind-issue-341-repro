import { Pressable, Text, View } from 'react-native';

import { copy762 } from '../generated/copy/copy762';
import { layout762 } from '../generated/layouts/layout762';
import { palette762 } from '../generated/palettes/palette762';

export function Screen762() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout762.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy762.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy762.detail} / {palette762.name}
			</Text>
		</View>
	);
}
