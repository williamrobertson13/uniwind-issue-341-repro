import { Pressable, Text, View } from 'react-native';

import { copy1054 } from '../generated/copy/copy1054';
import { layout1054 } from '../generated/layouts/layout1054';
import { palette1054 } from '../generated/palettes/palette1054';

export function Screen1054() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1054.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1054.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1054.detail} / {palette1054.name}
			</Text>
		</View>
	);
}
