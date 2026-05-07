import { Pressable, Text, View } from 'react-native';

import { copy1033 } from '../generated/copy/copy1033';
import { layout1033 } from '../generated/layouts/layout1033';
import { palette1033 } from '../generated/palettes/palette1033';

export function Screen1033() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1033.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1033.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1033.detail} / {palette1033.name}
			</Text>
		</View>
	);
}
