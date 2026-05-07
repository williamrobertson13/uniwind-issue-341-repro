import { Pressable, Text, View } from 'react-native';

import { copy886 } from '../generated/copy/copy886';
import { layout886 } from '../generated/layouts/layout886';
import { palette886 } from '../generated/palettes/palette886';

export function Screen886() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout886.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy886.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy886.detail} / {palette886.name}
			</Text>
		</View>
	);
}
