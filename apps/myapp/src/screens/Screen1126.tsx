import { Pressable, Text, View } from 'react-native';

import { copy1126 } from '../generated/copy/copy1126';
import { layout1126 } from '../generated/layouts/layout1126';
import { palette1126 } from '../generated/palettes/palette1126';

export function Screen1126() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1126.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1126.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1126.detail} / {palette1126.name}
			</Text>
		</View>
	);
}
