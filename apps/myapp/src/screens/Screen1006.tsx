import { Pressable, Text, View } from 'react-native';

import { copy1006 } from '../generated/copy/copy1006';
import { layout1006 } from '../generated/layouts/layout1006';
import { palette1006 } from '../generated/palettes/palette1006';

export function Screen1006() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1006.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1006.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1006.detail} / {palette1006.name}
			</Text>
		</View>
	);
}
