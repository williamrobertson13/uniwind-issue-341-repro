import { Pressable, Text, View } from 'react-native';

import { copy1206 } from '../generated/copy/copy1206';
import { layout1206 } from '../generated/layouts/layout1206';
import { palette1206 } from '../generated/palettes/palette1206';

export function Screen1206() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1206.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1206.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1206.detail} / {palette1206.name}
			</Text>
		</View>
	);
}
