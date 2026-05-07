import { Pressable, Text, View } from 'react-native';

import { copy794 } from '../generated/copy/copy794';
import { layout794 } from '../generated/layouts/layout794';
import { palette794 } from '../generated/palettes/palette794';

export function Screen794() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout794.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy794.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy794.detail} / {palette794.name}
			</Text>
		</View>
	);
}
