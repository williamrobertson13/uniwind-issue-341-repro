import { Pressable, Text, View } from 'react-native';

import { copy1048 } from '../generated/copy/copy1048';
import { layout1048 } from '../generated/layouts/layout1048';
import { palette1048 } from '../generated/palettes/palette1048';

export function Screen1048() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1048.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1048.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1048.detail} / {palette1048.name}
			</Text>
		</View>
	);
}
