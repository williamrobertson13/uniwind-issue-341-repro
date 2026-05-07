import { Pressable, Text, View } from 'react-native';

import { copy830 } from '../generated/copy/copy830';
import { layout830 } from '../generated/layouts/layout830';
import { palette830 } from '../generated/palettes/palette830';

export function Screen830() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout830.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy830.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy830.detail} / {palette830.name}
			</Text>
		</View>
	);
}
