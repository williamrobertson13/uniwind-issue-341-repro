import { Pressable, Text, View } from 'react-native';

import { copy354 } from '../generated/copy/copy354';
import { layout354 } from '../generated/layouts/layout354';
import { palette354 } from '../generated/palettes/palette354';

export function Screen354() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout354.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy354.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy354.detail} / {palette354.name}
			</Text>
		</View>
	);
}
