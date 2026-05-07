import { Pressable, Text, View } from 'react-native';

import { copy988 } from '../generated/copy/copy988';
import { layout988 } from '../generated/layouts/layout988';
import { palette988 } from '../generated/palettes/palette988';

export function Screen988() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout988.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy988.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy988.detail} / {palette988.name}
			</Text>
		</View>
	);
}
