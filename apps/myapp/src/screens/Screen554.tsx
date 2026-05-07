import { Pressable, Text, View } from 'react-native';

import { copy554 } from '../generated/copy/copy554';
import { layout554 } from '../generated/layouts/layout554';
import { palette554 } from '../generated/palettes/palette554';

export function Screen554() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout554.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy554.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy554.detail} / {palette554.name}
			</Text>
		</View>
	);
}
