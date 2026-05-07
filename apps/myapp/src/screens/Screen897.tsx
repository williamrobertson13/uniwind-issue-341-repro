import { Pressable, Text, View } from 'react-native';

import { copy897 } from '../generated/copy/copy897';
import { layout897 } from '../generated/layouts/layout897';
import { palette897 } from '../generated/palettes/palette897';

export function Screen897() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout897.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy897.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy897.detail} / {palette897.name}
			</Text>
		</View>
	);
}
