import { Pressable, Text, View } from 'react-native';

import { copy1001 } from '../generated/copy/copy1001';
import { layout1001 } from '../generated/layouts/layout1001';
import { palette1001 } from '../generated/palettes/palette1001';

export function Screen1001() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout1001.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1001.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1001.detail} / {palette1001.name}
			</Text>
		</View>
	);
}
