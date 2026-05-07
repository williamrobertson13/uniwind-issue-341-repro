import { Pressable, Text, View } from 'react-native';

import { copy1222 } from '../generated/copy/copy1222';
import { layout1222 } from '../generated/layouts/layout1222';
import { palette1222 } from '../generated/palettes/palette1222';

export function Screen1222() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1222.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1222.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1222.detail} / {palette1222.name}
			</Text>
		</View>
	);
}
