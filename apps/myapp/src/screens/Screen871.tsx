import { Pressable, Text, View } from 'react-native';

import { copy871 } from '../generated/copy/copy871';
import { layout871 } from '../generated/layouts/layout871';
import { palette871 } from '../generated/palettes/palette871';

export function Screen871() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout871.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy871.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy871.detail} / {palette871.name}
			</Text>
		</View>
	);
}
