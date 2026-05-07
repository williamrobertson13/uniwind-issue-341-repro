import { Pressable, Text, View } from 'react-native';

import { copy532 } from '../generated/copy/copy532';
import { layout532 } from '../generated/layouts/layout532';
import { palette532 } from '../generated/palettes/palette532';

export function Screen532() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout532.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy532.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy532.detail} / {palette532.name}
			</Text>
		</View>
	);
}
