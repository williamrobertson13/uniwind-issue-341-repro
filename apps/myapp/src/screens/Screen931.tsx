import { Pressable, Text, View } from 'react-native';

import { copy931 } from '../generated/copy/copy931';
import { layout931 } from '../generated/layouts/layout931';
import { palette931 } from '../generated/palettes/palette931';

export function Screen931() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout931.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy931.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy931.detail} / {palette931.name}
			</Text>
		</View>
	);
}
