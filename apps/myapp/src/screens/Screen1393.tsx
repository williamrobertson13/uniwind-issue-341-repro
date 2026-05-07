import { Pressable, Text, View } from 'react-native';

import { copy1393 } from '../generated/copy/copy1393';
import { layout1393 } from '../generated/layouts/layout1393';
import { palette1393 } from '../generated/palettes/palette1393';

export function Screen1393() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1393.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1393.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1393.detail} / {palette1393.name}
			</Text>
		</View>
	);
}
