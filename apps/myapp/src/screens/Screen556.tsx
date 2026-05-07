import { Pressable, Text, View } from 'react-native';

import { copy556 } from '../generated/copy/copy556';
import { layout556 } from '../generated/layouts/layout556';
import { palette556 } from '../generated/palettes/palette556';

export function Screen556() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout556.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy556.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy556.detail} / {palette556.name}
			</Text>
		</View>
	);
}
