import { Pressable, Text, View } from 'react-native';

import { copy317 } from '../generated/copy/copy317';
import { layout317 } from '../generated/layouts/layout317';
import { palette317 } from '../generated/palettes/palette317';

export function Screen317() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout317.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy317.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy317.detail} / {palette317.name}
			</Text>
		</View>
	);
}
