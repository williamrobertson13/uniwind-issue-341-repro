import { Pressable, Text, View } from 'react-native';

import { copy332 } from '../generated/copy/copy332';
import { layout332 } from '../generated/layouts/layout332';
import { palette332 } from '../generated/palettes/palette332';

export function Screen332() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout332.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy332.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy332.detail} / {palette332.name}
			</Text>
		</View>
	);
}
