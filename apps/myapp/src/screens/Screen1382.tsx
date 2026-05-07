import { Pressable, Text, View } from 'react-native';

import { copy1382 } from '../generated/copy/copy1382';
import { layout1382 } from '../generated/layouts/layout1382';
import { palette1382 } from '../generated/palettes/palette1382';

export function Screen1382() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1382.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1382.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1382.detail} / {palette1382.name}
			</Text>
		</View>
	);
}
