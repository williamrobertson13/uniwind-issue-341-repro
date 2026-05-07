import { Pressable, Text, View } from 'react-native';

import { copy822 } from '../generated/copy/copy822';
import { layout822 } from '../generated/layouts/layout822';
import { palette822 } from '../generated/palettes/palette822';

export function Screen822() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout822.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy822.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy822.detail} / {palette822.name}
			</Text>
		</View>
	);
}
