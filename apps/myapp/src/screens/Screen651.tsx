import { Pressable, Text, View } from 'react-native';

import { copy651 } from '../generated/copy/copy651';
import { layout651 } from '../generated/layouts/layout651';
import { palette651 } from '../generated/palettes/palette651';

export function Screen651() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout651.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy651.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy651.detail} / {palette651.name}
			</Text>
		</View>
	);
}
