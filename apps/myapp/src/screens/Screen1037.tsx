import { Pressable, Text, View } from 'react-native';

import { copy1037 } from '../generated/copy/copy1037';
import { layout1037 } from '../generated/layouts/layout1037';
import { palette1037 } from '../generated/palettes/palette1037';

export function Screen1037() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout1037.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1037.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1037.detail} / {palette1037.name}
			</Text>
		</View>
	);
}
