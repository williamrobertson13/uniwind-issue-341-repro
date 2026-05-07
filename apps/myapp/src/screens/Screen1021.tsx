import { Pressable, Text, View } from 'react-native';

import { copy1021 } from '../generated/copy/copy1021';
import { layout1021 } from '../generated/layouts/layout1021';
import { palette1021 } from '../generated/palettes/palette1021';

export function Screen1021() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1021.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1021.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1021.detail} / {palette1021.name}
			</Text>
		</View>
	);
}
