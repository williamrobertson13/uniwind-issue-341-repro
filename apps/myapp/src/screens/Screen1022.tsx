import { Pressable, Text, View } from 'react-native';

import { copy1022 } from '../generated/copy/copy1022';
import { layout1022 } from '../generated/layouts/layout1022';
import { palette1022 } from '../generated/palettes/palette1022';

export function Screen1022() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1022.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1022.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1022.detail} / {palette1022.name}
			</Text>
		</View>
	);
}
