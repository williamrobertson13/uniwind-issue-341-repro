import { Pressable, Text, View } from 'react-native';

import { copy884 } from '../generated/copy/copy884';
import { layout884 } from '../generated/layouts/layout884';
import { palette884 } from '../generated/palettes/palette884';

export function Screen884() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout884.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy884.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy884.detail} / {palette884.name}
			</Text>
		</View>
	);
}
