import { Pressable, Text, View } from 'react-native';

import { copy347 } from '../generated/copy/copy347';
import { layout347 } from '../generated/layouts/layout347';
import { palette347 } from '../generated/palettes/palette347';

export function Screen347() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout347.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy347.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy347.detail} / {palette347.name}
			</Text>
		</View>
	);
}
