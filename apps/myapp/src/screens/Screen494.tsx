import { Pressable, Text, View } from 'react-native';

import { copy494 } from '../generated/copy/copy494';
import { layout494 } from '../generated/layouts/layout494';
import { palette494 } from '../generated/palettes/palette494';

export function Screen494() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout494.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy494.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy494.detail} / {palette494.name}
			</Text>
		</View>
	);
}
