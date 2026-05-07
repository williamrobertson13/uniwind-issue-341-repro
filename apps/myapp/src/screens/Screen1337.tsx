import { Pressable, Text, View } from 'react-native';

import { copy1337 } from '../generated/copy/copy1337';
import { layout1337 } from '../generated/layouts/layout1337';
import { palette1337 } from '../generated/palettes/palette1337';

export function Screen1337() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout1337.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1337.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1337.detail} / {palette1337.name}
			</Text>
		</View>
	);
}
