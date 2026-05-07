import { Pressable, Text, View } from 'react-native';

import { copy964 } from '../generated/copy/copy964';
import { layout964 } from '../generated/layouts/layout964';
import { palette964 } from '../generated/palettes/palette964';

export function Screen964() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout964.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy964.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy964.detail} / {palette964.name}
			</Text>
		</View>
	);
}
