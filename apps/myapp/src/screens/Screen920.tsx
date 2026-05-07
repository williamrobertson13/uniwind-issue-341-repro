import { Pressable, Text, View } from 'react-native';

import { copy920 } from '../generated/copy/copy920';
import { layout920 } from '../generated/layouts/layout920';
import { palette920 } from '../generated/palettes/palette920';

export function Screen920() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout920.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy920.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy920.detail} / {palette920.name}
			</Text>
		</View>
	);
}
