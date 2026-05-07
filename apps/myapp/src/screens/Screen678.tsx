import { Pressable, Text, View } from 'react-native';

import { copy678 } from '../generated/copy/copy678';
import { layout678 } from '../generated/layouts/layout678';
import { palette678 } from '../generated/palettes/palette678';

export function Screen678() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout678.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy678.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy678.detail} / {palette678.name}
			</Text>
		</View>
	);
}
