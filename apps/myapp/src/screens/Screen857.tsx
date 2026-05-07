import { Pressable, Text, View } from 'react-native';

import { copy857 } from '../generated/copy/copy857';
import { layout857 } from '../generated/layouts/layout857';
import { palette857 } from '../generated/palettes/palette857';

export function Screen857() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout857.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy857.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy857.detail} / {palette857.name}
			</Text>
		</View>
	);
}
