import { Pressable, Text, View } from 'react-native';

import { copy924 } from '../generated/copy/copy924';
import { layout924 } from '../generated/layouts/layout924';
import { palette924 } from '../generated/palettes/palette924';

export function Screen924() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout924.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy924.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy924.detail} / {palette924.name}
			</Text>
		</View>
	);
}
