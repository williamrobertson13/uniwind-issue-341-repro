import { Pressable, Text, View } from 'react-native';

import { copy68 } from '../generated/copy/copy68';
import { layout68 } from '../generated/layouts/layout68';
import { palette68 } from '../generated/palettes/palette68';

export function Screen68() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout68.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy68.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy68.detail} / {palette68.name}
			</Text>
		</View>
	);
}
