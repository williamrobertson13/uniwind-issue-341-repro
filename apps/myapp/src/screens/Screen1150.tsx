import { Pressable, Text, View } from 'react-native';

import { copy1150 } from '../generated/copy/copy1150';
import { layout1150 } from '../generated/layouts/layout1150';
import { palette1150 } from '../generated/palettes/palette1150';

export function Screen1150() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1150.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1150.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1150.detail} / {palette1150.name}
			</Text>
		</View>
	);
}
