import { Pressable, Text, View } from 'react-native';

import { copy972 } from '../generated/copy/copy972';
import { layout972 } from '../generated/layouts/layout972';
import { palette972 } from '../generated/palettes/palette972';

export function Screen972() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout972.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy972.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy972.detail} / {palette972.name}
			</Text>
		</View>
	);
}
