import { Pressable, Text, View } from 'react-native';

import { copy1030 } from '../generated/copy/copy1030';
import { layout1030 } from '../generated/layouts/layout1030';
import { palette1030 } from '../generated/palettes/palette1030';

export function Screen1030() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1030.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1030.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1030.detail} / {palette1030.name}
			</Text>
		</View>
	);
}
