import { Pressable, Text, View } from 'react-native';

import { copy548 } from '../generated/copy/copy548';
import { layout548 } from '../generated/layouts/layout548';
import { palette548 } from '../generated/palettes/palette548';

export function Screen548() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout548.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy548.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy548.detail} / {palette548.name}
			</Text>
		</View>
	);
}
