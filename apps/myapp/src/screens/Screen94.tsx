import { Pressable, Text, View } from 'react-native';

import { copy94 } from '../generated/copy/copy94';
import { layout94 } from '../generated/layouts/layout94';
import { palette94 } from '../generated/palettes/palette94';

export function Screen94() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout94.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy94.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy94.detail} / {palette94.name}
			</Text>
		</View>
	);
}
