import { Pressable, Text, View } from 'react-native';

import { copy555 } from '../generated/copy/copy555';
import { layout555 } from '../generated/layouts/layout555';
import { palette555 } from '../generated/palettes/palette555';

export function Screen555() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout555.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy555.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy555.detail} / {palette555.name}
			</Text>
		</View>
	);
}
