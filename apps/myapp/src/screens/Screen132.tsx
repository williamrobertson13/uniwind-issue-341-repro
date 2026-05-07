import { Pressable, Text, View } from 'react-native';

import { copy132 } from '../generated/copy/copy132';
import { layout132 } from '../generated/layouts/layout132';
import { palette132 } from '../generated/palettes/palette132';

export function Screen132() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout132.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy132.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy132.detail} / {palette132.name}
			</Text>
		</View>
	);
}
