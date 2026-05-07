import { Pressable, Text, View } from 'react-native';

import { copy915 } from '../generated/copy/copy915';
import { layout915 } from '../generated/layouts/layout915';
import { palette915 } from '../generated/palettes/palette915';

export function Screen915() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout915.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy915.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy915.detail} / {palette915.name}
			</Text>
		</View>
	);
}
