import { Pressable, Text, View } from 'react-native';

import { copy643 } from '../generated/copy/copy643';
import { layout643 } from '../generated/layouts/layout643';
import { palette643 } from '../generated/palettes/palette643';

export function Screen643() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout643.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy643.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy643.detail} / {palette643.name}
			</Text>
		</View>
	);
}
