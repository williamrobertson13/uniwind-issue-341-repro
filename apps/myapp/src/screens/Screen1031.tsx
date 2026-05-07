import { Pressable, Text, View } from 'react-native';

import { copy1031 } from '../generated/copy/copy1031';
import { layout1031 } from '../generated/layouts/layout1031';
import { palette1031 } from '../generated/palettes/palette1031';

export function Screen1031() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout1031.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1031.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1031.detail} / {palette1031.name}
			</Text>
		</View>
	);
}
