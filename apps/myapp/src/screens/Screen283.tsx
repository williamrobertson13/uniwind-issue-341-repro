import { Pressable, Text, View } from 'react-native';

import { copy283 } from '../generated/copy/copy283';
import { layout283 } from '../generated/layouts/layout283';
import { palette283 } from '../generated/palettes/palette283';

export function Screen283() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout283.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy283.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy283.detail} / {palette283.name}
			</Text>
		</View>
	);
}
