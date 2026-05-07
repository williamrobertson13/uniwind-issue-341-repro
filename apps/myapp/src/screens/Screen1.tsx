import { Pressable, Text, View } from 'react-native';

import { copy1 } from '../generated/copy/copy1';
import { layout1 } from '../generated/layouts/layout1';
import { palette1 } from '../generated/palettes/palette1';

export function Screen1() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1.detail} / {palette1.name}
			</Text>
		</View>
	);
}
