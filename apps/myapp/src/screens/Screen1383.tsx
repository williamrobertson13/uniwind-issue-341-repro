import { Pressable, Text, View } from 'react-native';

import { copy1383 } from '../generated/copy/copy1383';
import { layout1383 } from '../generated/layouts/layout1383';
import { palette1383 } from '../generated/palettes/palette1383';

export function Screen1383() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1383.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1383.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1383.detail} / {palette1383.name}
			</Text>
		</View>
	);
}
