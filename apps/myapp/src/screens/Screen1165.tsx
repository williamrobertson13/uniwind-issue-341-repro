import { Pressable, Text, View } from 'react-native';

import { copy1165 } from '../generated/copy/copy1165';
import { layout1165 } from '../generated/layouts/layout1165';
import { palette1165 } from '../generated/palettes/palette1165';

export function Screen1165() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1165.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy1165.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1165.detail} / {palette1165.name}
			</Text>
		</View>
	);
}
