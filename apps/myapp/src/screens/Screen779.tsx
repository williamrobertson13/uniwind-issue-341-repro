import { Pressable, Text, View } from 'react-native';

import { copy779 } from '../generated/copy/copy779';
import { layout779 } from '../generated/layouts/layout779';
import { palette779 } from '../generated/palettes/palette779';

export function Screen779() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout779.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy779.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy779.detail} / {palette779.name}
			</Text>
		</View>
	);
}
