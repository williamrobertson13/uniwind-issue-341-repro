import { Pressable, Text, View } from 'react-native';

import { copy995 } from '../generated/copy/copy995';
import { layout995 } from '../generated/layouts/layout995';
import { palette995 } from '../generated/palettes/palette995';

export function Screen995() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout995.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy995.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy995.detail} / {palette995.name}
			</Text>
		</View>
	);
}
