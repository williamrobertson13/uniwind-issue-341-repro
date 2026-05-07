import { Pressable, Text, View } from 'react-native';

import { copy1075 } from '../generated/copy/copy1075';
import { layout1075 } from '../generated/layouts/layout1075';
import { palette1075 } from '../generated/palettes/palette1075';

export function Screen1075() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1075.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1075.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1075.detail} / {palette1075.name}
			</Text>
		</View>
	);
}
