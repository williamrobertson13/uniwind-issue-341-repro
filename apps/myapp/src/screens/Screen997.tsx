import { Pressable, Text, View } from 'react-native';

import { copy997 } from '../generated/copy/copy997';
import { layout997 } from '../generated/layouts/layout997';
import { palette997 } from '../generated/palettes/palette997';

export function Screen997() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout997.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy997.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy997.detail} / {palette997.name}
			</Text>
		</View>
	);
}
