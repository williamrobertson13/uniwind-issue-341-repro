import { Pressable, Text, View } from 'react-native';

import { copy476 } from '../generated/copy/copy476';
import { layout476 } from '../generated/layouts/layout476';
import { palette476 } from '../generated/palettes/palette476';

export function Screen476() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout476.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy476.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy476.detail} / {palette476.name}
			</Text>
		</View>
	);
}
