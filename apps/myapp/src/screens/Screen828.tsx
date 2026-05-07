import { Pressable, Text, View } from 'react-native';

import { copy828 } from '../generated/copy/copy828';
import { layout828 } from '../generated/layouts/layout828';
import { palette828 } from '../generated/palettes/palette828';

export function Screen828() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout828.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy828.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy828.detail} / {palette828.name}
			</Text>
		</View>
	);
}
