import { Pressable, Text, View } from 'react-native';

import { copy1302 } from '../generated/copy/copy1302';
import { layout1302 } from '../generated/layouts/layout1302';
import { palette1302 } from '../generated/palettes/palette1302';

export function Screen1302() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1302.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1302.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1302.detail} / {palette1302.name}
			</Text>
		</View>
	);
}
