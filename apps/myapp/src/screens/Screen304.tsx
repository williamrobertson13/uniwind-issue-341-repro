import { Pressable, Text, View } from 'react-native';

import { copy304 } from '../generated/copy/copy304';
import { layout304 } from '../generated/layouts/layout304';
import { palette304 } from '../generated/palettes/palette304';

export function Screen304() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout304.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy304.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy304.detail} / {palette304.name}
			</Text>
		</View>
	);
}
