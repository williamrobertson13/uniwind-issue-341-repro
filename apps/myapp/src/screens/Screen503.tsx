import { Pressable, Text, View } from 'react-native';

import { copy503 } from '../generated/copy/copy503';
import { layout503 } from '../generated/layouts/layout503';
import { palette503 } from '../generated/palettes/palette503';

export function Screen503() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout503.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy503.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy503.detail} / {palette503.name}
			</Text>
		</View>
	);
}
