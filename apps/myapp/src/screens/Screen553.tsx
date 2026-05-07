import { Pressable, Text, View } from 'react-native';

import { copy553 } from '../generated/copy/copy553';
import { layout553 } from '../generated/layouts/layout553';
import { palette553 } from '../generated/palettes/palette553';

export function Screen553() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout553.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy553.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy553.detail} / {palette553.name}
			</Text>
		</View>
	);
}
