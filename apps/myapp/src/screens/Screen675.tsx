import { Pressable, Text, View } from 'react-native';

import { copy675 } from '../generated/copy/copy675';
import { layout675 } from '../generated/layouts/layout675';
import { palette675 } from '../generated/palettes/palette675';

export function Screen675() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout675.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy675.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy675.detail} / {palette675.name}
			</Text>
		</View>
	);
}
