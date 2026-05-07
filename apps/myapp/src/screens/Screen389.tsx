import { Pressable, Text, View } from 'react-native';

import { copy389 } from '../generated/copy/copy389';
import { layout389 } from '../generated/layouts/layout389';
import { palette389 } from '../generated/palettes/palette389';

export function Screen389() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout389.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy389.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy389.detail} / {palette389.name}
			</Text>
		</View>
	);
}
