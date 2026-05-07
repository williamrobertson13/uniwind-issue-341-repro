import { Pressable, Text, View } from 'react-native';

import { copy113 } from '../generated/copy/copy113';
import { layout113 } from '../generated/layouts/layout113';
import { palette113 } from '../generated/palettes/palette113';

export function Screen113() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout113.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy113.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy113.detail} / {palette113.name}
			</Text>
		</View>
	);
}
