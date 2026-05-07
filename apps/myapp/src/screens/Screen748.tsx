import { Pressable, Text, View } from 'react-native';

import { copy748 } from '../generated/copy/copy748';
import { layout748 } from '../generated/layouts/layout748';
import { palette748 } from '../generated/palettes/palette748';

export function Screen748() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout748.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy748.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy748.detail} / {palette748.name}
			</Text>
		</View>
	);
}
