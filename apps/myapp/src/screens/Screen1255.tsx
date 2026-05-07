import { Pressable, Text, View } from 'react-native';

import { copy1255 } from '../generated/copy/copy1255';
import { layout1255 } from '../generated/layouts/layout1255';
import { palette1255 } from '../generated/palettes/palette1255';

export function Screen1255() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1255.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1255.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1255.detail} / {palette1255.name}
			</Text>
		</View>
	);
}
