import { Pressable, Text, View } from 'react-native';

import { copy1105 } from '../generated/copy/copy1105';
import { layout1105 } from '../generated/layouts/layout1105';
import { palette1105 } from '../generated/palettes/palette1105';

export function Screen1105() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1105.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1105.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1105.detail} / {palette1105.name}
			</Text>
		</View>
	);
}
