import { Pressable, Text, View } from 'react-native';

import { copy1069 } from '../generated/copy/copy1069';
import { layout1069 } from '../generated/layouts/layout1069';
import { palette1069 } from '../generated/palettes/palette1069';

export function Screen1069() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1069.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1069.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1069.detail} / {palette1069.name}
			</Text>
		</View>
	);
}
