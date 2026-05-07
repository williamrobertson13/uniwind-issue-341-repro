import { Pressable, Text, View } from 'react-native';

import { copy1073 } from '../generated/copy/copy1073';
import { layout1073 } from '../generated/layouts/layout1073';
import { palette1073 } from '../generated/palettes/palette1073';

export function Screen1073() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout1073.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1073.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1073.detail} / {palette1073.name}
			</Text>
		</View>
	);
}
