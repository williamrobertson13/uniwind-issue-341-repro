import { Pressable, Text, View } from 'react-native';

import { copy458 } from '../generated/copy/copy458';
import { layout458 } from '../generated/layouts/layout458';
import { palette458 } from '../generated/palettes/palette458';

export function Screen458() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout458.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy458.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy458.detail} / {palette458.name}
			</Text>
		</View>
	);
}
