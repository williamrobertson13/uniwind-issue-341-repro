import { Pressable, Text, View } from 'react-native';

import { copy412 } from '../generated/copy/copy412';
import { layout412 } from '../generated/layouts/layout412';
import { palette412 } from '../generated/palettes/palette412';

export function Screen412() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout412.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy412.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy412.detail} / {palette412.name}
			</Text>
		</View>
	);
}
