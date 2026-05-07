import { Pressable, Text, View } from 'react-native';

import { copy628 } from '../generated/copy/copy628';
import { layout628 } from '../generated/layouts/layout628';
import { palette628 } from '../generated/palettes/palette628';

export function Screen628() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout628.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy628.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy628.detail} / {palette628.name}
			</Text>
		</View>
	);
}
