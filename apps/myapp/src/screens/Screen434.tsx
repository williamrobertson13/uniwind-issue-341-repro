import { Pressable, Text, View } from 'react-native';

import { copy434 } from '../generated/copy/copy434';
import { layout434 } from '../generated/layouts/layout434';
import { palette434 } from '../generated/palettes/palette434';

export function Screen434() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout434.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy434.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy434.detail} / {palette434.name}
			</Text>
		</View>
	);
}
