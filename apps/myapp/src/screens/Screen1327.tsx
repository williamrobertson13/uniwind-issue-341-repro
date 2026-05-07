import { Pressable, Text, View } from 'react-native';

import { copy1327 } from '../generated/copy/copy1327';
import { layout1327 } from '../generated/layouts/layout1327';
import { palette1327 } from '../generated/palettes/palette1327';

export function Screen1327() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout1327.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1327.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1327.detail} / {palette1327.name}
			</Text>
		</View>
	);
}
