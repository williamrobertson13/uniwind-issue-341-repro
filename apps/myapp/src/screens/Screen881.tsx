import { Pressable, Text, View } from 'react-native';

import { copy881 } from '../generated/copy/copy881';
import { layout881 } from '../generated/layouts/layout881';
import { palette881 } from '../generated/palettes/palette881';

export function Screen881() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout881.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy881.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy881.detail} / {palette881.name}
			</Text>
		</View>
	);
}
