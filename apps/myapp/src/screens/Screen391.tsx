import { Pressable, Text, View } from 'react-native';

import { copy391 } from '../generated/copy/copy391';
import { layout391 } from '../generated/layouts/layout391';
import { palette391 } from '../generated/palettes/palette391';

export function Screen391() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout391.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy391.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy391.detail} / {palette391.name}
			</Text>
		</View>
	);
}
