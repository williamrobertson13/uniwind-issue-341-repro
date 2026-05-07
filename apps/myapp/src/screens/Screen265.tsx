import { Pressable, Text, View } from 'react-native';

import { copy265 } from '../generated/copy/copy265';
import { layout265 } from '../generated/layouts/layout265';
import { palette265 } from '../generated/palettes/palette265';

export function Screen265() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout265.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy265.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy265.detail} / {palette265.name}
			</Text>
		</View>
	);
}
