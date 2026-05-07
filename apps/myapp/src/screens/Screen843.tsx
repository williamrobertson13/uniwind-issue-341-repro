import { Pressable, Text, View } from 'react-native';

import { copy843 } from '../generated/copy/copy843';
import { layout843 } from '../generated/layouts/layout843';
import { palette843 } from '../generated/palettes/palette843';

export function Screen843() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout843.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy843.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy843.detail} / {palette843.name}
			</Text>
		</View>
	);
}
