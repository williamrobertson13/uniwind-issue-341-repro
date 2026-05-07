import { Pressable, Text, View } from 'react-native';

import { copy1213 } from '../generated/copy/copy1213';
import { layout1213 } from '../generated/layouts/layout1213';
import { palette1213 } from '../generated/palettes/palette1213';

export function Screen1213() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1213.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy1213.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1213.detail} / {palette1213.name}
			</Text>
		</View>
	);
}
