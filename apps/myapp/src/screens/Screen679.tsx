import { Pressable, Text, View } from 'react-native';

import { copy679 } from '../generated/copy/copy679';
import { layout679 } from '../generated/layouts/layout679';
import { palette679 } from '../generated/palettes/palette679';

export function Screen679() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout679.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy679.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy679.detail} / {palette679.name}
			</Text>
		</View>
	);
}
