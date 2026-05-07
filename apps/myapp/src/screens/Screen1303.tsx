import { Pressable, Text, View } from 'react-native';

import { copy1303 } from '../generated/copy/copy1303';
import { layout1303 } from '../generated/layouts/layout1303';
import { palette1303 } from '../generated/palettes/palette1303';

export function Screen1303() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1303.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1303.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1303.detail} / {palette1303.name}
			</Text>
		</View>
	);
}
