import { Pressable, Text, View } from 'react-native';

import { copy1130 } from '../generated/copy/copy1130';
import { layout1130 } from '../generated/layouts/layout1130';
import { palette1130 } from '../generated/palettes/palette1130';

export function Screen1130() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1130.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1130.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1130.detail} / {palette1130.name}
			</Text>
		</View>
	);
}
