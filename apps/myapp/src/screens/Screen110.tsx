import { Pressable, Text, View } from 'react-native';

import { copy110 } from '../generated/copy/copy110';
import { layout110 } from '../generated/layouts/layout110';
import { palette110 } from '../generated/palettes/palette110';

export function Screen110() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout110.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy110.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy110.detail} / {palette110.name}
			</Text>
		</View>
	);
}
