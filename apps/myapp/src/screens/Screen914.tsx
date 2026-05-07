import { Pressable, Text, View } from 'react-native';

import { copy914 } from '../generated/copy/copy914';
import { layout914 } from '../generated/layouts/layout914';
import { palette914 } from '../generated/palettes/palette914';

export function Screen914() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout914.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy914.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy914.detail} / {palette914.name}
			</Text>
		</View>
	);
}
