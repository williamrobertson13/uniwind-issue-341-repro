import { Pressable, Text, View } from 'react-native';

import { copy950 } from '../generated/copy/copy950';
import { layout950 } from '../generated/layouts/layout950';
import { palette950 } from '../generated/palettes/palette950';

export function Screen950() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout950.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy950.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy950.detail} / {palette950.name}
			</Text>
		</View>
	);
}
