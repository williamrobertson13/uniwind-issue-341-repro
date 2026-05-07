import { Pressable, Text, View } from 'react-native';

import { copy563 } from '../generated/copy/copy563';
import { layout563 } from '../generated/layouts/layout563';
import { palette563 } from '../generated/palettes/palette563';

export function Screen563() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout563.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy563.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy563.detail} / {palette563.name}
			</Text>
		</View>
	);
}
