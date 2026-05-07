import { Pressable, Text, View } from 'react-native';

import { copy1118 } from '../generated/copy/copy1118';
import { layout1118 } from '../generated/layouts/layout1118';
import { palette1118 } from '../generated/palettes/palette1118';

export function Screen1118() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1118.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1118.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1118.detail} / {palette1118.name}
			</Text>
		</View>
	);
}
