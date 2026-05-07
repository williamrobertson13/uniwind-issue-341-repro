import { Pressable, Text, View } from 'react-native';

import { copy911 } from '../generated/copy/copy911';
import { layout911 } from '../generated/layouts/layout911';
import { palette911 } from '../generated/palettes/palette911';

export function Screen911() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout911.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy911.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy911.detail} / {palette911.name}
			</Text>
		</View>
	);
}
