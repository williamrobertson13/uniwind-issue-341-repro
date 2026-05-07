import { Pressable, Text, View } from 'react-native';

import { copy485 } from '../generated/copy/copy485';
import { layout485 } from '../generated/layouts/layout485';
import { palette485 } from '../generated/palettes/palette485';

export function Screen485() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout485.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy485.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy485.detail} / {palette485.name}
			</Text>
		</View>
	);
}
