import { Pressable, Text, View } from 'react-native';

import { copy1231 } from '../generated/copy/copy1231';
import { layout1231 } from '../generated/layouts/layout1231';
import { palette1231 } from '../generated/palettes/palette1231';

export function Screen1231() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1231.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1231.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1231.detail} / {palette1231.name}
			</Text>
		</View>
	);
}
