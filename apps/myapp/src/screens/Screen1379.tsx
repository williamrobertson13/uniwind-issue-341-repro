import { Pressable, Text, View } from 'react-native';

import { copy1379 } from '../generated/copy/copy1379';
import { layout1379 } from '../generated/layouts/layout1379';
import { palette1379 } from '../generated/palettes/palette1379';

export function Screen1379() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1379.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1379.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1379.detail} / {palette1379.name}
			</Text>
		</View>
	);
}
