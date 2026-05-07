import { Pressable, Text, View } from 'react-native';

import { copy1297 } from '../generated/copy/copy1297';
import { layout1297 } from '../generated/layouts/layout1297';
import { palette1297 } from '../generated/palettes/palette1297';

export function Screen1297() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1297.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1297.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1297.detail} / {palette1297.name}
			</Text>
		</View>
	);
}
