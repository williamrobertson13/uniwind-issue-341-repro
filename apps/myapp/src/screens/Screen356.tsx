import { Pressable, Text, View } from 'react-native';

import { copy356 } from '../generated/copy/copy356';
import { layout356 } from '../generated/layouts/layout356';
import { palette356 } from '../generated/palettes/palette356';

export function Screen356() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout356.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy356.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy356.detail} / {palette356.name}
			</Text>
		</View>
	);
}
