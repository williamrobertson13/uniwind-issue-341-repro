import { Pressable, Text, View } from 'react-native';

import { copy618 } from '../generated/copy/copy618';
import { layout618 } from '../generated/layouts/layout618';
import { palette618 } from '../generated/palettes/palette618';

export function Screen618() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout618.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy618.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy618.detail} / {palette618.name}
			</Text>
		</View>
	);
}
