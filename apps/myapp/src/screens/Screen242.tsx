import { Pressable, Text, View } from 'react-native';

import { copy242 } from '../generated/copy/copy242';
import { layout242 } from '../generated/layouts/layout242';
import { palette242 } from '../generated/palettes/palette242';

export function Screen242() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout242.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy242.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy242.detail} / {palette242.name}
			</Text>
		</View>
	);
}
