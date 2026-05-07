import { Pressable, Text, View } from 'react-native';

import { copy158 } from '../generated/copy/copy158';
import { layout158 } from '../generated/layouts/layout158';
import { palette158 } from '../generated/palettes/palette158';

export function Screen158() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout158.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy158.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy158.detail} / {palette158.name}
			</Text>
		</View>
	);
}
