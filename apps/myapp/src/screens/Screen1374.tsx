import { Pressable, Text, View } from 'react-native';

import { copy1374 } from '../generated/copy/copy1374';
import { layout1374 } from '../generated/layouts/layout1374';
import { palette1374 } from '../generated/palettes/palette1374';

export function Screen1374() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1374.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1374.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1374.detail} / {palette1374.name}
			</Text>
		</View>
	);
}
