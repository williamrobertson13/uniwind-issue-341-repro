import { Pressable, Text, View } from 'react-native';

import { copy1093 } from '../generated/copy/copy1093';
import { layout1093 } from '../generated/layouts/layout1093';
import { palette1093 } from '../generated/palettes/palette1093';

export function Screen1093() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1093.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1093.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1093.detail} / {palette1093.name}
			</Text>
		</View>
	);
}
