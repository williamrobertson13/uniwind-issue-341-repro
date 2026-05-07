import { Pressable, Text, View } from 'react-native';

import { copy580 } from '../generated/copy/copy580';
import { layout580 } from '../generated/layouts/layout580';
import { palette580 } from '../generated/palettes/palette580';

export function Screen580() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout580.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy580.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy580.detail} / {palette580.name}
			</Text>
		</View>
	);
}
