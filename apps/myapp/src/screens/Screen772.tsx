import { Pressable, Text, View } from 'react-native';

import { copy772 } from '../generated/copy/copy772';
import { layout772 } from '../generated/layouts/layout772';
import { palette772 } from '../generated/palettes/palette772';

export function Screen772() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout772.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy772.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy772.detail} / {palette772.name}
			</Text>
		</View>
	);
}
