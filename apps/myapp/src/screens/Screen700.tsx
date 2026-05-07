import { Pressable, Text, View } from 'react-native';

import { copy700 } from '../generated/copy/copy700';
import { layout700 } from '../generated/layouts/layout700';
import { palette700 } from '../generated/palettes/palette700';

export function Screen700() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout700.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy700.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy700.detail} / {palette700.name}
			</Text>
		</View>
	);
}
