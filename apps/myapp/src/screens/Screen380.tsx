import { Pressable, Text, View } from 'react-native';

import { copy380 } from '../generated/copy/copy380';
import { layout380 } from '../generated/layouts/layout380';
import { palette380 } from '../generated/palettes/palette380';

export function Screen380() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout380.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy380.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy380.detail} / {palette380.name}
			</Text>
		</View>
	);
}
