import { Pressable, Text, View } from 'react-native';

import { copy1193 } from '../generated/copy/copy1193';
import { layout1193 } from '../generated/layouts/layout1193';
import { palette1193 } from '../generated/palettes/palette1193';

export function Screen1193() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout1193.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1193.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1193.detail} / {palette1193.name}
			</Text>
		</View>
	);
}
