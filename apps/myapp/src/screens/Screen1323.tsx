import { Pressable, Text, View } from 'react-native';

import { copy1323 } from '../generated/copy/copy1323';
import { layout1323 } from '../generated/layouts/layout1323';
import { palette1323 } from '../generated/palettes/palette1323';

export function Screen1323() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1323.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1323.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1323.detail} / {palette1323.name}
			</Text>
		</View>
	);
}
