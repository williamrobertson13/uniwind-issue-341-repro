import { Pressable, Text, View } from 'react-native';

import { copy420 } from '../generated/copy/copy420';
import { layout420 } from '../generated/layouts/layout420';
import { palette420 } from '../generated/palettes/palette420';

export function Screen420() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout420.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy420.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy420.detail} / {palette420.name}
			</Text>
		</View>
	);
}
