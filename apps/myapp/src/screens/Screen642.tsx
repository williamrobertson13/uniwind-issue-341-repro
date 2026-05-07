import { Pressable, Text, View } from 'react-native';

import { copy642 } from '../generated/copy/copy642';
import { layout642 } from '../generated/layouts/layout642';
import { palette642 } from '../generated/palettes/palette642';

export function Screen642() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout642.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy642.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy642.detail} / {palette642.name}
			</Text>
		</View>
	);
}
