import { Pressable, Text, View } from 'react-native';

import { copy47 } from '../generated/copy/copy47';
import { layout47 } from '../generated/layouts/layout47';
import { palette47 } from '../generated/palettes/palette47';

export function Screen47() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout47.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy47.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy47.detail} / {palette47.name}
			</Text>
		</View>
	);
}
