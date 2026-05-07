import { Pressable, Text, View } from 'react-native';

import { copy340 } from '../generated/copy/copy340';
import { layout340 } from '../generated/layouts/layout340';
import { palette340 } from '../generated/palettes/palette340';

export function Screen340() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout340.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy340.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy340.detail} / {palette340.name}
			</Text>
		</View>
	);
}
