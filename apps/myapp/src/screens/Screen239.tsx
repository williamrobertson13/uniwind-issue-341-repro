import { Pressable, Text, View } from 'react-native';

import { copy239 } from '../generated/copy/copy239';
import { layout239 } from '../generated/layouts/layout239';
import { palette239 } from '../generated/palettes/palette239';

export function Screen239() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout239.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy239.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy239.detail} / {palette239.name}
			</Text>
		</View>
	);
}
