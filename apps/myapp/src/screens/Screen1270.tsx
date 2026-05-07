import { Pressable, Text, View } from 'react-native';

import { copy1270 } from '../generated/copy/copy1270';
import { layout1270 } from '../generated/layouts/layout1270';
import { palette1270 } from '../generated/palettes/palette1270';

export function Screen1270() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1270.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1270.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1270.detail} / {palette1270.name}
			</Text>
		</View>
	);
}
