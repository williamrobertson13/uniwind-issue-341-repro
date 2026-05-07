import { Pressable, Text, View } from 'react-native';

import { copy932 } from '../generated/copy/copy932';
import { layout932 } from '../generated/layouts/layout932';
import { palette932 } from '../generated/palettes/palette932';

export function Screen932() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout932.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy932.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy932.detail} / {palette932.name}
			</Text>
		</View>
	);
}
