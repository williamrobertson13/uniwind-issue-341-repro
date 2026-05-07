import { Pressable, Text, View } from 'react-native';

import { copy102 } from '../generated/copy/copy102';
import { layout102 } from '../generated/layouts/layout102';
import { palette102 } from '../generated/palettes/palette102';

export function Screen102() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout102.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy102.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy102.detail} / {palette102.name}
			</Text>
		</View>
	);
}
