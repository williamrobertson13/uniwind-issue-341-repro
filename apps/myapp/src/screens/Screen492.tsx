import { Pressable, Text, View } from 'react-native';

import { copy492 } from '../generated/copy/copy492';
import { layout492 } from '../generated/layouts/layout492';
import { palette492 } from '../generated/palettes/palette492';

export function Screen492() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout492.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy492.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy492.detail} / {palette492.name}
			</Text>
		</View>
	);
}
