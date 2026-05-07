import { Pressable, Text, View } from 'react-native';

import { copy428 } from '../generated/copy/copy428';
import { layout428 } from '../generated/layouts/layout428';
import { palette428 } from '../generated/palettes/palette428';

export function Screen428() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout428.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy428.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy428.detail} / {palette428.name}
			</Text>
		</View>
	);
}
