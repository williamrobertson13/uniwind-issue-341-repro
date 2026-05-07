import { Pressable, Text, View } from 'react-native';

import { copy387 } from '../generated/copy/copy387';
import { layout387 } from '../generated/layouts/layout387';
import { palette387 } from '../generated/palettes/palette387';

export function Screen387() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout387.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy387.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy387.detail} / {palette387.name}
			</Text>
		</View>
	);
}
