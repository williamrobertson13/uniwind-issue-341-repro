import { Pressable, Text, View } from 'react-native';

import { copy804 } from '../generated/copy/copy804';
import { layout804 } from '../generated/layouts/layout804';
import { palette804 } from '../generated/palettes/palette804';

export function Screen804() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout804.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy804.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy804.detail} / {palette804.name}
			</Text>
		</View>
	);
}
