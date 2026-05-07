import { Pressable, Text, View } from 'react-native';

import { copy426 } from '../generated/copy/copy426';
import { layout426 } from '../generated/layouts/layout426';
import { palette426 } from '../generated/palettes/palette426';

export function Screen426() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout426.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy426.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy426.detail} / {palette426.name}
			</Text>
		</View>
	);
}
