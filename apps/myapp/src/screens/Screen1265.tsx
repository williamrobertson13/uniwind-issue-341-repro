import { Pressable, Text, View } from 'react-native';

import { copy1265 } from '../generated/copy/copy1265';
import { layout1265 } from '../generated/layouts/layout1265';
import { palette1265 } from '../generated/palettes/palette1265';

export function Screen1265() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout1265.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1265.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1265.detail} / {palette1265.name}
			</Text>
		</View>
	);
}
