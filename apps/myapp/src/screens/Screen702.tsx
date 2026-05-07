import { Pressable, Text, View } from 'react-native';

import { copy702 } from '../generated/copy/copy702';
import { layout702 } from '../generated/layouts/layout702';
import { palette702 } from '../generated/palettes/palette702';

export function Screen702() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout702.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy702.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy702.detail} / {palette702.name}
			</Text>
		</View>
	);
}
