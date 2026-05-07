import { Pressable, Text, View } from 'react-native';

import { copy668 } from '../generated/copy/copy668';
import { layout668 } from '../generated/layouts/layout668';
import { palette668 } from '../generated/palettes/palette668';

export function Screen668() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout668.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy668.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy668.detail} / {palette668.name}
			</Text>
		</View>
	);
}
