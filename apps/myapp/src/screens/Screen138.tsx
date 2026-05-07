import { Pressable, Text, View } from 'react-native';

import { copy138 } from '../generated/copy/copy138';
import { layout138 } from '../generated/layouts/layout138';
import { palette138 } from '../generated/palettes/palette138';

export function Screen138() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout138.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy138.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy138.detail} / {palette138.name}
			</Text>
		</View>
	);
}
