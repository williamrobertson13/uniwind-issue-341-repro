import { Pressable, Text, View } from 'react-native';

import { copy164 } from '../generated/copy/copy164';
import { layout164 } from '../generated/layouts/layout164';
import { palette164 } from '../generated/palettes/palette164';

export function Screen164() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout164.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy164.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy164.detail} / {palette164.name}
			</Text>
		</View>
	);
}
