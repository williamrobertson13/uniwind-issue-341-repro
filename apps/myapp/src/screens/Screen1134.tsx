import { Pressable, Text, View } from 'react-native';

import { copy1134 } from '../generated/copy/copy1134';
import { layout1134 } from '../generated/layouts/layout1134';
import { palette1134 } from '../generated/palettes/palette1134';

export function Screen1134() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1134.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1134.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1134.detail} / {palette1134.name}
			</Text>
		</View>
	);
}
