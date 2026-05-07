import { Pressable, Text, View } from 'react-native';

import { copy1229 } from '../generated/copy/copy1229';
import { layout1229 } from '../generated/layouts/layout1229';
import { palette1229 } from '../generated/palettes/palette1229';

export function Screen1229() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout1229.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1229.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1229.detail} / {palette1229.name}
			</Text>
		</View>
	);
}
