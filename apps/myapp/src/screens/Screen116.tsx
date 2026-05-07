import { Pressable, Text, View } from 'react-native';

import { copy116 } from '../generated/copy/copy116';
import { layout116 } from '../generated/layouts/layout116';
import { palette116 } from '../generated/palettes/palette116';

export function Screen116() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout116.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy116.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy116.detail} / {palette116.name}
			</Text>
		</View>
	);
}
