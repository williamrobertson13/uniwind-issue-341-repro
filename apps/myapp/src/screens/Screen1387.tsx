import { Pressable, Text, View } from 'react-native';

import { copy1387 } from '../generated/copy/copy1387';
import { layout1387 } from '../generated/layouts/layout1387';
import { palette1387 } from '../generated/palettes/palette1387';

export function Screen1387() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1387.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1387.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1387.detail} / {palette1387.name}
			</Text>
		</View>
	);
}
