import { Pressable, Text, View } from 'react-native';

import { copy1310 } from '../generated/copy/copy1310';
import { layout1310 } from '../generated/layouts/layout1310';
import { palette1310 } from '../generated/palettes/palette1310';

export function Screen1310() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1310.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1310.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1310.detail} / {palette1310.name}
			</Text>
		</View>
	);
}
