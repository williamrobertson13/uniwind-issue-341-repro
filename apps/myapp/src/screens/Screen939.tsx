import { Pressable, Text, View } from 'react-native';

import { copy939 } from '../generated/copy/copy939';
import { layout939 } from '../generated/layouts/layout939';
import { palette939 } from '../generated/palettes/palette939';

export function Screen939() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout939.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy939.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy939.detail} / {palette939.name}
			</Text>
		</View>
	);
}
