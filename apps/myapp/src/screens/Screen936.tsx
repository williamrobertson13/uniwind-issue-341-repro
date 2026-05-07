import { Pressable, Text, View } from 'react-native';

import { copy936 } from '../generated/copy/copy936';
import { layout936 } from '../generated/layouts/layout936';
import { palette936 } from '../generated/palettes/palette936';

export function Screen936() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout936.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy936.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy936.detail} / {palette936.name}
			</Text>
		</View>
	);
}
