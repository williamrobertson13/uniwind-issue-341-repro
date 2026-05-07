import { Pressable, Text, View } from 'react-native';

import { copy59 } from '../generated/copy/copy59';
import { layout59 } from '../generated/layouts/layout59';
import { palette59 } from '../generated/palettes/palette59';

export function Screen59() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout59.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy59.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy59.detail} / {palette59.name}
			</Text>
		</View>
	);
}
