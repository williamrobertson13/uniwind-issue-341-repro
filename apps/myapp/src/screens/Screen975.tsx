import { Pressable, Text, View } from 'react-native';

import { copy975 } from '../generated/copy/copy975';
import { layout975 } from '../generated/layouts/layout975';
import { palette975 } from '../generated/palettes/palette975';

export function Screen975() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout975.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy975.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy975.detail} / {palette975.name}
			</Text>
		</View>
	);
}
