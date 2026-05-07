import { Pressable, Text, View } from 'react-native';

import { copy396 } from '../generated/copy/copy396';
import { layout396 } from '../generated/layouts/layout396';
import { palette396 } from '../generated/palettes/palette396';

export function Screen396() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout396.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy396.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy396.detail} / {palette396.name}
			</Text>
		</View>
	);
}
