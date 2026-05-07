import { Pressable, Text, View } from 'react-native';

import { copy131 } from '../generated/copy/copy131';
import { layout131 } from '../generated/layouts/layout131';
import { palette131 } from '../generated/palettes/palette131';

export function Screen131() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout131.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy131.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy131.detail} / {palette131.name}
			</Text>
		</View>
	);
}
