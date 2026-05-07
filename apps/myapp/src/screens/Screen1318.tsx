import { Pressable, Text, View } from 'react-native';

import { copy1318 } from '../generated/copy/copy1318';
import { layout1318 } from '../generated/layouts/layout1318';
import { palette1318 } from '../generated/palettes/palette1318';

export function Screen1318() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1318.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1318.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1318.detail} / {palette1318.name}
			</Text>
		</View>
	);
}
